#include "pch.h"

#include "App.h"

#include "AutolinkedNativeModules.g.h"
#include "ReactPackageProvider.h"

// titleBar customization includes
#include "winrt/Windows.UI.h"
#include "winrt/Windows.UI.Core.h"
#include "winrt/Windows.UI.ViewManagement.h"
#include "winrt/Windows.ApplicationModel.Core.h"
#include "winrt/Windows.ApplicationModel.Activation.h"

#include <winrt/LottieReactNative.h>
#include <winrt/AnimatedVisuals.h>


using namespace winrt;
using namespace xaml;
using namespace xaml::Controls;
using namespace xaml::Navigation;

using namespace Windows::UI;
using namespace Windows::UI::ViewManagement;
using namespace Windows::ApplicationModel::Core;


using namespace Windows::ApplicationModel;
namespace winrt::reactativeustomallery::implementation
{
/// <summary>
/// Initializes the singleton application object.  This is the first line of
/// authored code executed, and as such is the logical equivalent of main() or
/// WinMain().
/// </summary>
App::App() noexcept
{
#if BUNDLE
    JavaScriptBundleFile(L"index.windows");
    InstanceSettings().UseWebDebugger(false);
    InstanceSettings().UseFastRefresh(false);
#else
    JavaScriptBundleFile(L"index");
    InstanceSettings().UseWebDebugger(true);
    InstanceSettings().UseFastRefresh(true);
#endif

#if _DEBUG
    InstanceSettings().UseDeveloperSupport(true);
#else
    InstanceSettings().UseDeveloperSupport(false);
#endif

    RegisterAutolinkedNativeModulePackages(PackageProviders()); // Includes any autolinked modules

    PackageProviders().Append(make<ReactPackageProvider>()); // Includes all modules in this project
    PackageProviders().Append(winrt::LottieReactNative::ReactPackageProvider(winrt::AnimatedVisuals::LottieCodegenSourceProvider()));
    InitializeComponent();
}

/// <summary>
/// Invoked when the application is launched normally by the end user.  Other entry points
/// will be used such as when the application is launched to open a specific file.
/// </summary>
/// <param name="e">Details about the launch request and process.</param>
void App::OnLaunched(activation::LaunchActivatedEventArgs const& e)
{
    super::OnLaunched(e);

    Frame rootFrame = Window::Current().Content().as<Frame>();

    auto titleBar = ApplicationView::GetForCurrentView().TitleBar();
    titleBar.BackgroundColor(ColorHelper::FromArgb(239,46,46,46));
    titleBar.ForegroundColor(ColorHelper::FromArgb(255 ,255, 255, 255));
    titleBar.InactiveBackgroundColor(ColorHelper::FromArgb(255, 46, 46, 46));
    titleBar.InactiveForegroundColor(ColorHelper::FromArgb(255, 46, 46, 46));
    uint8_t buttonAlpha = 255;
    titleBar.ButtonBackgroundColor(ColorHelper::FromArgb(255, 46, 46, 46));
    // titleBar.ButtonHoverBackgroundColor(Colors::Transparent);
    // titleBar.ButtonPressedBackgroundColor(Colors::Transparent);
    // titleBar.ButtonInactiveBackgroundColor(Colors::Transparent);

    // // Title bar button foreground colors. Alpha must be 255.
    // titleBar.ButtonForegroundColor(ColorHelper::FromArgb(255, 232, 211, 162));
    // titleBar.ButtonHoverForegroundColor(ColorHelper::FromArgb(0, 0, 0, 255));
    // titleBar.ButtonPressedForegroundColor(ColorHelper::FromArgb(255, 54, 60, 116));
    // titleBar.ButtonInactiveForegroundColor(ColorHelper::FromArgb(255, 232, 211, 162));

    CoreApplication::GetCurrentView().TitleBar().ExtendViewIntoTitleBar(true);
    rootFrame.Navigate(xaml_typename<MainPage>(), box_value(e.Arguments()));

    // rootFrame.Navigate(xaml_typename<MainPage>(), nullptr);//[Victor] - adicionei para inicializar o app mais rapidamente
}

/// <summary>
/// Invoked when the application is activated by some means other than normal launching.
/// </summary>
void App::OnActivated(Activation::IActivatedEventArgs const &e) {
  auto preActivationContent = Window::Current().Content();
  super::OnActivated(e);
  if (!preActivationContent && Window::Current()) {
    Frame rootFrame = Window::Current().Content().as<Frame>();
    rootFrame.Navigate(xaml_typename<MainPage>(), nullptr);
  }
}

/// <summary>
/// Invoked when application execution is being suspended.  Application state is saved
/// without knowing whether the application will be terminated or resumed with the contents
/// of memory still intact.
/// </summary>
/// <param name="sender">The source of the suspend request.</param>
/// <param name="e">Details about the suspend request.</param>
void App::OnSuspending([[maybe_unused]] IInspectable const& sender, [[maybe_unused]] SuspendingEventArgs const& e)
{
    // Save application state and stop any background activity
}

/// <summary>
/// Invoked when Navigation to a certain page fails
/// </summary>
/// <param name="sender">The Frame which failed navigation</param>
/// <param name="e">Details about the navigation failure</param>
void App::OnNavigationFailed(IInspectable const&, NavigationFailedEventArgs const& e)
{
    throw hresult_error(E_FAIL, hstring(L"Failed to load Page ") + e.SourcePageType().Name);
}

} // namespace winrt::reactativeustomallery::implementation