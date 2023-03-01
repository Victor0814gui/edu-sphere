#include "pch.h"
#include "ReactPackageProvider.h"
#include "NativeModules.h"
#include "..\..\src\native-modules\windows\Notification.h"

using namespace winrt::Microsoft::ReactNative;

namespace winrt::reactNativeCustomGallery::implementation
{

void ReactPackageProvider::CreatePackage(IReactPackageBuilder const &packageBuilder) noexcept
{
    AddAttributedModules(packageBuilder, true);
}

} // namespace winrt::reactNativeCustomGallery::implementation
