#pragma once

#include "pch.h"
#include "NativeModules.h"

#include "winrt/Windows.UI.h"
#include "winrt/Windows.UI.Core.h"
#include "winrt/Windows.UI.ViewManagement.h"
#include "winrt/Windows.ApplicationModel.Core.h"
#include "winrt/Windows.ApplicationModel.Activation.h"
#include <minwinbase.h>

using namespace winrt;
using namespace Windows::ApplicationModel::Core;
using namespace Windows::UI::ViewManagement;
using namespace Windows::UI::Xaml;
using namespace Windows::UI::Xaml::Controls;
using namespace Windows::UI::Xaml::Navigation;


  REACT_MODULE(Fullscreen);
  struct Fullscreen final
  {
   

    REACT_METHOD(enter)
    void enter() noexcept
    {
     
         ApplicationView view = ApplicationView::GetForCurrentView();
         view.TryEnterFullScreenMode();      
         view.ExitFullScreenMode();
       
    }

    REACT_METHOD(leave)
    void leave() noexcept
    {

        ApplicationView view = ApplicationView::GetForCurrentView();        
        view.ExitFullScreenMode();        
    }

    REACT_METHOD(IsFullscreen, L"isFullscreen")
    boolean IsFullscreen() noexcept
    {

        ApplicationView view = ApplicationView::GetForCurrentView();
        boolean fullscreenMode = view.IsFullScreenMode();
        isFullscren(fullscreenMode);
        return fullscreenMode;
    }



    REACT_EVENT(isFullscren);
    std::function<void(double)> isFullscren;
    
    private:
      React::ReactContext m_context;
  };
  