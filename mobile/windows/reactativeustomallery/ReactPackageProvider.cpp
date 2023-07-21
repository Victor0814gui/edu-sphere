#include "pch.h"
#include "ReactPackageProvider.h"
#include "NativeModules.h"


#include "FirebaseModule.h"

using namespace winrt::Microsoft::ReactNative;

namespace winrt::reactativeustomallery::implementation
{

void ReactPackageProvider::CreatePackage(IReactPackageBuilder const &packageBuilder) noexcept
{
    AddAttributedModules(packageBuilder, true);
}

} // namespace winrt::reactativeustomallery::implementation