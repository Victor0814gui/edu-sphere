
#include <iostream>	
#include <windows.h>
using namespace std;
#include  "NativeModules.h"



#define HEIGHT 480											
#define WIDTH  640							
namespace NativeModules {
  REACT_MODULE(DragAndDropFiles);
  struct DragAndDropFiles{

    void HandleFiles(WPARAM wParam) noexcept
    {
      TCHAR szName[MAX_PATH];

      HDROP hDrop = (HDROP)wParam;

      int count = DragQueryFile(hDrop, 0xFFFFFFFF, szName, MAX_PATH);

      for(int i = 0; i < count; i++)
      {
        DragQueryFile(hDrop, i, szName, MAX_PATH);

        MessageBox(GetForegroundWindow(), szName, "Current file received", MB_OK);
      }

      DragFinish(hDrop);
    }

    REACT_METHOD(L"WndProc")
    LRESULT CALLBACK WndProc (HWND hwnd, UINT iMsg, WPARAM wParam, LPARAM lParam) noexcept
    {
        switch (iMsg)											
        {
        case WM_DROPFILES:
          HandleFiles(wParam);
          break;
        case WM_DESTROY:									
          PostQuitMessage(0);									
          break;				
      }													
      return DefWindowProc (hwnd, iMsg, wParam, lParam);		
    }
  }
}



// int WINAPI WinMain (HINSTANCE hInstance, HINSTANCE hPrevInstance, PSTR szCmdLine, int iCmdShow)			
// {														
	
//   HWND hwnd;
	
//   MSG msg;
	
	
//   WNDCLASSEX  wndclass = {
//     sizeof (wndclass),
//     CS_HREDRAW | CS_VREDRAW,
//     WndProc, 0, 0, hInstance,
//     LoadIcon (NULL, IDI_WINLOGO),
//     LoadCursor (NULL, IDC_ARROW),
//     (HBRUSH) GetStockObject (WHITE_BRUSH),
//     NULL, "GameTutorials", LoadIcon (NULL, IDI_WINLOGO)
//   };
	
	
// 	RegisterClassEx (&wndclass);	

	
// 	DWORD dwStyleEx = WS_EX_ACCEPTFILES;
	
	
//   hwnd = CreateWindowEx(dwStyleEx,						
//     "GameTutorials",					
//     "DragAndDrop - Drag files to me!",	
//     WS_OVERLAPPEDWINDOW,				
//     CW_USEDEFAULT,						
//     CW_USEDEFAULT,						
//     WIDTH,								
//     HEIGHT,						    
//     NULL,								
//     NULL,								
//     hInstance,						    
//     NULL);								

//   ShowWindow (hwnd, iCmdShow) noexcept;

//   UpdateWindow (hwnd);									

// 	while (1)					
//     {	
// 		if(PeekMessage(&msg, NULL, 0, 0, PM_REMOVE))
// 		{
// 			if(msg.message == WM_QUIT) break;

// 			TranslateMessage (&msg);					
		
// 			DispatchMessage (&msg);							
// 		}
// 		else
// 		{
// 			Sleep(1);
// 		}
//   }

// 	UnregisterClass("GameTutorials",hInstance);
    
// 	return (int)msg.wParam ;										
// }