#pragma once
#include <NativeModules.h>
#include <winrt/Windows.UI.Notifications.h>
#include <winrt/Windows.Data.Xml.Dom.h>

using namespace winrt::Windows::UI::Notifications;
using namespace winrt::Windows::Data::Xml::Dom;


REACT_MODULE(Notifications)
struct Notifications {

    REACT_INIT(Initialize);
    void Initialize(React::ReactContext const& context) noexcept {
        m_context = context;
    }

    REACT_METHOD(Raise, L"raise");
    void Raise(const React::JSValue& notification) noexcept
    {

        ToastTemplateType type = ToastTemplateType::ToastImageAndText03;

        React::JSValueObject obj;
        if (notification.Type() == React::JSValueType::String)
        {
            obj["text"] = notification.AsString();
        }
        else {
            obj = notification.AsObject().Copy();
        }

        auto typeEntry = obj.find("template");
        if (typeEntry != obj.end() && typeEntry->second.Type() == React::JSValueType::Int64) {
            type = static_cast<ToastTemplateType>(typeEntry->second.AsInt32());
        }

        auto xml = ToastNotificationManager::GetTemplateContent(type);

        for (const auto& entry : obj)
        {
            const auto tagName = winrt::to_hstring(entry.first);
            auto xmlElements = xml.GetElementsByTagName(tagName);

            if (entry.second.Type() == React::JSValueType::String) {
                React::JSValueArray strToArray;
                strToArray.push_back(entry.second.AsString());
                FillXmlElements(xml, xmlElements, strToArray);
            }
            else if (entry.second.Type() == React::JSValueType::Object) {
                React::JSValueArray objToArray;
                objToArray.push_back(entry.second.AsObject().Copy());
                FillXmlElements(xml, xmlElements, objToArray);
            }
            else {
                FillXmlElements(xml, xmlElements, entry.second.AsArray());
            }
        }


        auto toast = winrt::Windows::UI::Notifications::ToastNotification(xml);
        ToastNotificationManager::CreateToastNotifier().Show(toast);


    }


private:
    React::ReactContext m_context;

    void FillXmlElements(const XmlDocument& xml, const XmlNodeList& xmlElements, const React::JSValueArray& arr) {
        int i = 0;
        for (const auto& arrValue : arr) {
            auto node = xmlElements.GetAt(i++);
            if (arrValue.Type() == React::JSValueType::String) {
                const auto value = winrt::to_hstring(arrValue.AsString());
                node.AppendChild(xml.CreateTextNode(value));
            }
            else if (arrValue.Type() == React::JSValueType::Object) {
                const auto& arrValueObj = arrValue.AsObject();
                for (const auto& entry : arrValueObj) {
                    auto attrName = winrt::to_hstring(entry.first);
                    auto attr = node.Attributes().GetNamedItem(attrName);
                    if (!attr) {
                        attr = xml.CreateAttribute(attrName);
                        node.Attributes().SetNamedItem(attr);
                    }

                    attr.NodeValue(winrt::box_value(winrt::to_hstring(entry.second.AsString())));

                }
            }
        }
    }
};