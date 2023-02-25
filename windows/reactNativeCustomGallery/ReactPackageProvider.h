#pragma once

#include "winrt/Microsoft.ReactNative.h"
#include <winrt/LottieReactNative.h>
#include <winrt/AnimatedVisuals.h>


namespace winrt::reactNativeCustomGallery::implementation
{
    struct ReactPackageProvider : winrt::implements<ReactPackageProvider, winrt::Microsoft::ReactNative::IReactPackageProvider>
    {
    public: // IReactPackageProvider
        void CreatePackage(winrt::Microsoft::ReactNative::IReactPackageBuilder const &packageBuilder) noexcept;
        PackageProviders().Append(winrt::LottieReactNative::ReactPackageProvider(winrt::AnimatedVisuals::LottieCodegenSourceProvider()));
    };
} // namespace winrt::reactNativeCustomGallery::implementation

