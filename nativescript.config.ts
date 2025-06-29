import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.nsiosfoundationmodels',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  ios: {
    NativeSource: [
      {
        name: 'PlatformNativeSrc',
        path: '**/*.swift'
      }
    ]
  }
} as NativeScriptConfig;