#include "pch.h"
#include "FilePicker.h"
#include <filesystem>
#include <windows.h>
#include <winrt/Windows.Storage.h>
#include <winrt/Windows.Storage.Pickers.h>
#include <winrt/Windows.Foundation.h>
#include <winrt/Windows.System.h>
#include <windows.h>
#include "shobjidl_core.h"

using namespace winrt;
using namespace winrt::Windows::Storage;
using namespace winrt::Windows::Foundation;
using namespace Windows::Storage::Pickers;
using namespace Windows::System;
using namespace Windows::UI::Xaml;

namespace FilePicker {
    void FilePicker::Initialize(RN::ReactContext const& reactContext) noexcept {
        m_reactContext = reactContext;
    }

    winrt::fire_and_forget FilePicker::pickFile(RN::ReactPromise<std::string> promise) noexcept
    try {
        HWND hwnd = GetConsoleWindow(); // #include <windows.h>
        FileOpenPicker filePicker = FileOpenPicker();
        filePicker.as<IInitializeWithWindow>()->Initialize(hwnd);
        filePicker.ViewMode(PickerViewMode::Thumbnail);
        filePicker.SuggestedStartLocation(PickerLocationId::Downloads);
        filePicker.FileTypeFilter().ReplaceAll({ L".jpg", L".jpeg", L".png" }); // Allowed File types

        try {
            StorageFile file{ co_await filePicker.PickSingleFileAsync() };
            try {
                if (file) {
                    promise.Resolve(winrt::to_string(file.Path())); // tempFile has to be cleaned up afterwards by you, it's located in TempState folder
                } else {
                    promise.Reject("No file was picked");
                }
            } catch (const hresult_error& ex) {
                promise.Reject(RN::ReactError{ "Couldn't copy file to TemporaryFolder", winrt::to_string(ex.message()).c_str()});
            }

        } catch(const hresult_error& ex) {
            promise.Reject(RN::ReactError{ "Unable to FilePicker.PickSingleFileAsync", winrt::to_string(ex.message()).c_str() });
        }

    } catch(const hresult_error& ex) {
        promise.Reject(RN::ReactError{ "Unable to set FilePicker options", winrt::to_string(ex.message()).c_str() });
    }
}