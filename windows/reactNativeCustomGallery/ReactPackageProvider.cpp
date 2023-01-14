#include "pch.h"
#include "ReactPackageProvider.h"
#include "NativeModules.h"
// #include "Notification.h"




using namespace winrt::Microsoft::ReactNative;

namespace winrt::reactNativeCustomGallery::implementation
{

    void ReactPackageProvider::CreatePackage(IReactPackageBuilder const &packageBuilder) noexcept
    {
        AddAttributedModules(packageBuilder);
    }

} // namespace winrt::reactNativeCustomGallery::implementation

