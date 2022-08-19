import React, { createContext, useEffect, useState } from 'react';
import { AppState, Platform } from 'react-native';
import { check, PERMISSIONS, PermissionStatus, request, openSettings } from 'react-native-permissions';

export interface PermissionsState {
    locationStatus: PermissionStatus;
}

export const permissionsInitState: PermissionsState = {
    locationStatus: 'unavailable',
}

type PermissionsContextProps = {
    permissions: PermissionsState;
    askLocationPermission: () => void;
    checkLocationPermission: () => void;
}

export const PermissionsContext = createContext({} as PermissionsContextProps); // TODO: qué exporta


export const PermissionsProvider = ({ children }: any) => {

    useEffect(() => {
        const subscribe = AppState.addEventListener('change', state => {
            if (state !== 'active') return;
            checkLocationPermission();

        });
        return () => {
            subscribe.remove();
        }
    }, [])


    const [permissions, setPermissions] = useState(permissionsInitState);

    const askLocationPermission = async () => {

        let permissionStatus: PermissionStatus;

        if (Platform.OS === 'ios') {
            // iOS
            permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        } else {
            // Android
            permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        }

        if (Platform.OS === 'ios') {
            console.log({ permissionStatus });
        }

        if (permissionStatus === 'blocked') {
            openSettings();
        }

        setPermissions({
            ...permissions,
            locationStatus: permissionStatus
        })

    }

    const checkLocationPermission = async () => {

        let permissionStatus: PermissionStatus;

        if (Platform.OS === 'ios') {
            // iOS
            permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        } else {
            // Android
            permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        }

        if (Platform.OS === 'ios') {
            console.log({ permissionStatus });
        }

        setPermissions({
            ...permissions,
            locationStatus: permissionStatus
        })

    }

    return (
        <PermissionsContext.Provider value={{
            permissions,
            askLocationPermission,
            checkLocationPermission
        }}>
            {children}
        </PermissionsContext.Provider>
    )

}