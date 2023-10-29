// Copyright (c) Microsoft. All rights reserved.
#pragma once

#include "pch.h"
// #include <collection.h>
// #include <ppltasks.h>

#include <winrt/Windows.ApplicationModel.h>
#include <winrt/Windows.Security.Cryptography.h>
#include <winrt/Windows.Security.Cryptography.Core.h>
#include <algorithm>
#include <cctype>
#include <string>

using namespace winrt::Microsoft::ReactNative;
using namespace winrt::Windows::Security::Authentication::Web;
using namespace winrt::Windows::Security::Cryptography;
using namespace winrt::Windows::Security::Cryptography::Core;
using namespace winrt::Windows::Storage::Streams;


namespace OAuthGoogle
{
    REACT_MODULE(OAuthGoogleModule)
    struct OAuthGoogleModule final
    {

        REACT_INIT(Init)
        void Init(ReactContext const& context) noexcept
        {
        }

        REACT_CONSTANT_PROVIDER(GetConstantProvider)
        void GetConstantProvider(ReactConstantProvider provider&) noexcept
        {
            WebAuthenticationBroker::GetCurrentApplicationCallbackUri callbackUri = WebAuthenticationBroker::GetCurrentApplicationCallbackUri();

            auto absoluteUri = callbackUri.AbsoluteUri();

            JSValue callback(winrt::to_string(absoluteUri));
            //provider.Add(L"callbackUri", callback);

            return callback;
        }
    };
