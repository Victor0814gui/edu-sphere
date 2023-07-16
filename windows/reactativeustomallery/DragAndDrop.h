#include "pch.h"
#include <winrt/Windows.ApplicationModel.Core.h>
#include <winrt/Windows.Data.Json.h>
#include <winrt/Windows.Storage.h>
#include <winrt/Windows.Storage.Streams.h>
#include <winrt/Windows.UI.Core.h>
#include <winrt/Windows.UI.Xaml.h>

using namespace winrt;
using namespace Windows::ApplicationModel::Core;
using namespace Windows::Data::Json;
using namespace Windows::Foundation;
using namespace Windows::Storage;
using namespace Windows::Storage::Streams;
using namespace Windows::UI::Core;
using namespace Windows::UI::Xaml;

namespace DragAndDrop
{
    REACT_MODULE(DragDropModule,L"DragDrop")
    struct DragDropModule final
    {
        DragDropModule() = default;
        //winrt::Microsoft::ReactNative::ReactContext context;

        REACT_INIT(Init)
        void Init(winrt::Microsoft::ReactNative::ReactContext const& context) noexcept
        {
            //context = reactContext;

            Windows::ApplicationModel::Core::CoreApplication::MainView().CoreWindow().Dispatcher().RunAsync(
                CoreDispatcherPriority::Normal, [this, context]()
            {
                auto currentWindow = Window::Current();
                if (currentWindow != nullptr)
                {
                    auto currentContent = currentWindow.Content();
                    if (currentContent != nullptr)
                    {
                        currentWindow.Content().AllowDrop(true);
                        currentWindow.Content().DragOver({ this, &DragDropModule::Content_DragOver });
                        currentWindow.Content().DragLeave({ this, &DragDropModule::Content_DragLeave });
                        currentWindow.Content().Drop({ this, &DragDropModule::Content_Drop });
                    }
                    else
                    {
                        OutputDebugString(L"content is null\n");
                    }
                }
                else
                {
                    OutputDebugString(L"window is null\n");
                }
            });
        }
        
        void Content_DragOver() noexcept
        {
            DragOverEvent(L"DragOver");
        }

        void Content_DragLeave() noexcept
        {
            DragLeaveEvent(L"DragLeave");
        }
       
        void Content_Drop() noexcept
        {
            DropEvent(L"ContentDrop");

        }

        REACT_EVENT(DragOverEvent, L"content_dragOver");
        std::function<void(std::wstring)> DragOverEvent;

        REACT_EVENT(DragLeaveEvent, L"content_dragLeave");
        std::function<void(std::wstring)> DragLeaveEvent;

        REACT_EVENT(DropEvent, L"content_drop");
        std::function<void(std::wstring)> DropEvent;
    };
}