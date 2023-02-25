RegisterDragDrop(hwnd,static_cast<IDropTarget*>(pointer_to_your_class));

/*========================end===============================*/

virtual HRESULT STDMETHODCALLTYPE DragEnter( 
        /* [unique][in] */ __RPC__in_opt IDataObject *pDataObj,
        /* [in] */ DWORD grfKeyState,
        /* [in] */ POINTL pt,
        /* [out][in] */ __RPC__inout DWORD *pdwEffect) = 0;

virtual HRESULT STDMETHODCALLTYPE DragOver( 
    /* [in] */ DWORD grfKeyState,
    /* [in] */ POINTL pt,
    /* [out][in] */ __RPC__inout DWORD *pdwEffect) = 0;

virtual HRESULT STDMETHODCALLTYPE DragLeave( void) = 0;

virtual HRESULT STDMETHODCALLTYPE Drop( 
    /* [unique][in] */ __RPC__in_opt IDataObject *pDataObj,
    /* [in] */ DWORD grfKeyState,
    /* [in] */ POINTL pt,
    /* [out][in] */ __RPC__inout DWORD *pdwEffect) = 0;



/*========================end===============================*/

FORMATETC fdrop = {CF_HDROP, 0, DVASPECT_CONTENT, -1, TYMED_HGLOBAL};

if (SUCCEEDED(pDataObj->QueryGetData(&fdrop)) ){
    STGMEDIUM stgMedium = {0};
    stgMedium.tymed = TYMED_HGLOBAL;
    HRESULT hr = pDataObj->GetData(&fdrop, &stgMedium);
    if (SUCCEEDED(hr))
    {
        HGLOBAL gmem = stgMedium.hGlobal;
        HDROP hdrop = (HDROP)GlobalLock(gmem);
        UINT numOfFiles =  DragQueryFile( (HDROP) hdrop,
                            0xFFFFFFFF,
                           NULL,
                            0
                        );

        TCHAR buffer[MAX_PATH];
        for( int i=0;i<numOfFiles;i++ ){
            UINT charsCopied = DragQueryFile( (HDROP) hdrop,
                            i,
                           buffer,
                            MAX_PATH
                        );
            MessageBox(NULL,buffer,_T("Archivos a copiar: "),MB_OK);


        }
        // use str
        GlobalUnlock(gmem);


        /*TCHAR* str = (TCHAR*)GlobalLock(gmem);
        // use str
        GlobalUnlock(gmem);*/
        ::ReleaseStgMedium(&stgMedium);
    }

}