/*!
* DevExtreme (dx.messages.ja.js)
* Version: 19.2.14
* Build date: Tue Apr 26 2022
*
* Copyright (c) 2012 - 2022 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"))
        })
    } else {
        if ("object" === typeof module && module.exports) {
            factory(require("devextreme/localization"))
        } else {
            factory(DevExpress.localization)
        }
    }
}(this, function(localization) {
    localization.loadMessages({
        ja: {
            Yes: "\u306f\u3044",
            No: "\u3044\u3044\u3048",
            Cancel: "\u30ad\u30e3\u30f3\u30bb\u30eb",
            Clear: "\u30af\u30ea\u30a2",
            Done: "\u5b8c\u4e86",
            Loading: "\u8aad\u307f\u8fbc\u307f\u4e2d\u2026",
            Select: "\u9078\u629e\u2026",
            Search: "\u691c\u7d22",
            Back: "\u623b\u308b",
            OK: "OK",
            "dxCollectionWidget-noDataText": "\u8868\u793a\u3059\u308b\u30c7\u30fc\u30bf\u304c\u3042\u308a\u307e\u305b\u3093\u3002",
            "dxDropDownEditor-selectLabel": "\u9078\u629e",
            "validation-required": "\u5fc5\u9808",
            "validation-required-formatted": "{0} \u306f\u5fc5\u9808\u3067\u3059\u3002",
            "validation-numeric": "\u6570\u5024\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
            "validation-numeric-formatted": "{0} \u306f\u6570\u5024\u3067\u306a\u3051\u308c\u3070\u3044\u3051\u307e\u305b\u3093\u3002",
            "validation-range": "\u5024\u304c\u7bc4\u56f2\u5916\u3067\u3059",
            "validation-range-formatted": "{0}\xa0\u306e\u9577\u3055\u304c\u6b63\u3057\u304f\u3042\u308a\u307e\u305b\u3093\u3002",
            "validation-stringLength": "\u5024\u306e\u9577\u3055\u304c\u6b63\u3057\u304f\u3042\u308a\u307e\u305b\u3093\u3002",
            "validation-stringLength-formatted": "{0} \u306e\u9577\u3055\u304c\u6b63\u3057\u304f\u3042\u308a\u307e\u305b\u3093",
            "validation-custom": "\u5024\u304c\u7121\u52b9\u3067\u3059\u3002",
            "validation-custom-formatted": "{0} \u304c\u7121\u52b9\u3067\u3059\u3002",
            "validation-async": "\u5024\u304c\u7121\u52b9\u3067\u3059\u3002",
            "validation-async-formatted": "{0} \u304c\u7121\u52b9\u3067\u3059\u3002",
            "validation-compare": "\u5024\u304c\u4e00\u81f4\u3057\u307e\u305b\u3093\u3002",
            "validation-compare-formatted": "\xa0{0} \u304c\u4e00\u81f4\u3057\u307e\u305b\u3093\u3002",
            "validation-pattern": "\u5024\u304c\u30d1\u30bf\u30fc\u30f3\u3068\u4e00\u81f4\u3057\u307e\u305b\u3093",
            "validation-pattern-formatted": "{0} \u304c\u30d1\u30bf\u30fc\u30f3\u3068\u4e00\u81f4\u3057\u307e\u305b\u3093",
            "validation-email": "\u96fb\u5b50\u30e1\u30fc\u30eb \u30a2\u30c9\u30ec\u30b9\u304c\u7121\u52b9\u3067\u3059\u3002",
            "validation-email-formatted": "{0} \u304c\u7121\u52b9\u3067\u3059\u3002",
            "validation-mask": "\u5024\u304c\u7121\u52b9\u3067\u3059\u3002",
            "dxLookup-searchPlaceholder": "\u6700\u4f4e\u6587\u5b57\u6570: {0}",
            "dxList-pullingDownText": "\u5f15\u3063\u5f35\u3063\u3066\u66f4\u65b0\u2026",
            "dxList-pulledDownText": "\u6307\u3092\u96e2\u3057\u3066\u66f4\u65b0\u2026",
            "dxList-refreshingText": "\u66f4\u65b0\u4e2d\u2026",
            "dxList-pageLoadingText": "\u8aad\u307f\u8fbc\u307f\u4e2d\u2026",
            "dxList-nextButtonText": "\u3082\u3063\u3068\u8868\u793a\u3059\u308b",
            "dxList-selectAll": "\u3059\u3079\u3066\u3092\u9078\u629e",
            "dxListEditDecorator-delete": "\u524a\u9664",
            "dxListEditDecorator-more": "\u3082\u3063\u3068",
            "dxScrollView-pullingDownText": "\u5f15\u3063\u5f35\u3063\u3066\u66f4\u65b0\u2026",
            "dxScrollView-pulledDownText": "\u6307\u3092\u96e2\u3057\u3066\u66f4\u65b0\u2026",
            "dxScrollView-refreshingText": "\u66f4\u65b0\u4e2d\u2026",
            "dxScrollView-reachBottomText": "\u8aad\u307f\u8fbc\u307f\u4e2d",
            "dxDateBox-simulatedDataPickerTitleTime": "\u6642\u523b\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
            "dxDateBox-simulatedDataPickerTitleDate": "\u65e5\u4ed8\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
            "dxDateBox-simulatedDataPickerTitleDateTime": "\u65e5\u4ed8\u3068\u6642\u523b\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
            "dxDateBox-validation-datetime": "\u65e5\u4ed8\u307e\u305f\u306f\u6642\u523b\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
            "dxFileUploader-selectFile": "\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e",
            "dxFileUploader-dropFile": "\u307e\u305f\u306f\u30d5\u30a1\u30a4\u30eb\u3092\u3053\u3061\u3089\u306b\u30c9\u30ed\u30c3\u30d7\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
            "dxFileUploader-bytes": "\u30d0\u30a4\u30c8",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9",
            "dxFileUploader-uploaded": "\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u6e08\u307f",
            "dxFileUploader-readyToUpload": "\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306e\u6e96\u5099\u4e2d",
            "dxFileUploader-uploadFailedMessage": "\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306b\u5931\u6557\u3057\u307e\u3057\u305f",
            "dxFileUploader-invalidFileExtension": "\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306e\u7a2e\u985e\u3092\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093",
            "dxFileUploader-invalidMaxFileSize": "\u30d5\u30a1\u30a4\u30eb\u304c\u5927\u304d\u3059\u304e\u307e\u3059",
            "dxFileUploader-invalidMinFileSize": "\u30d5\u30a1\u30a4\u30eb\u304c\u5c0f\u3055\u3059\u304e\u307e\u3059",
            "dxRangeSlider-ariaFrom": "\u304b\u3089",
            "dxRangeSlider-ariaTill": "\u307e\u3067",
            "dxSwitch-switchedOnText": "\u30aa\u30f3",
            "dxSwitch-switchedOffText": "\u30aa\u30d5",
            "dxForm-optionalMark": "\u4efb\u610f",
            "dxForm-requiredMessage": "{0} \u306f\u5fc5\u9808\u30d5\u30a3\u30fc\u30eb\u30c9\u3067\u3059",
            "dxNumberBox-invalidValueMessage": "\u6570\u5024\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
            "dxNumberBox-noDataText": "\u30c7\u30fc\u30bf\u304c\u3042\u308a\u307e\u305b\u3093",
            "dxDataGrid-columnChooserTitle": "\u5217\u306e\u9078\u629e",
            "dxDataGrid-columnChooserEmptyText": "\u96a0\u3057\u305f\u3044\u5217\u306e\u30d8\u30c3\u30c0\u30fc\u3092\u3053\u3053\u306b\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
            "dxDataGrid-groupContinuesMessage": "\u6b21\u30da\u30fc\u30b8\u306b\u7d9a\u304f",
            "dxDataGrid-groupContinuedMessage": "\u524d\u30da\u30fc\u30b8\u304b\u3089\u7d9a\u304f",
            "dxDataGrid-groupHeaderText": "\u3053\u306e\u5217\u3067\u30b0\u30eb\u30fc\u30d7\u5316",
            "dxDataGrid-ungroupHeaderText": "\u30b0\u30eb\u30fc\u30d7\u89e3\u9664",
            "dxDataGrid-ungroupAllText": "\u3059\u3079\u3066\u306e\u30b0\u30eb\u30fc\u30d7\u3092\u89e3\u9664",
            "dxDataGrid-editingEditRow": "\u7de8\u96c6",
            "dxDataGrid-editingSaveRowChanges": "\u4fdd\u5b58",
            "dxDataGrid-editingCancelRowChanges": "\u30ad\u30e3\u30f3\u30bb\u30eb",
            "dxDataGrid-editingDeleteRow": "\u524a\u9664",
            "dxDataGrid-editingUndeleteRow": "\u5fa9\u5143",
            "dxDataGrid-editingConfirmDeleteMessage": "\u3053\u306e\u30ec\u30b3\u30fc\u30c9\u3092\u524a \u9664\u3057\u3066\u3082\u3088\u308d\u3057\u3044\u3067\u3059\u304b?",
            "dxDataGrid-validationCancelChanges": "\u5909\u66f4\u3092\u30ad\u30e3\u30f3\u30bb\u30eb",
            "dxDataGrid-groupPanelEmptyText": "\u30b0\u30eb\u30fc\u30d7\u5316\u3057\u305f\u3044\u5217\u306e\u30d8\u30c3\u30c0\u30fc\u3092\u3053\u3053\u306b\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
            "dxDataGrid-noDataText": "\u30c7\u30fc\u30bf\u304c\u3042\u308a\u307e\u305b\u3093",
            "dxDataGrid-searchPanelPlaceholder": "\u691c\u7d22",
            "dxDataGrid-filterRowShowAllText": "(\u3059\u3079\u3066)",
            "dxDataGrid-filterRowResetOperationText": "\u30ea\u30bb\u30c3\u30c8",
            "dxDataGrid-filterRowOperationEquals": "\u6307\u5b9a\u306e\u5024\u306b\u7b49\u3057\u3044",
            "dxDataGrid-filterRowOperationNotEquals": "\u6307\u5b9a\u306e\u5024\u306b\u7b49\u3057\u304f\u306a\u3044",
            "dxDataGrid-filterRowOperationLess": "\u6307\u5b9a\u306e\u5024\u3088\u308a\u5c0f\u3055\u3044",
            "dxDataGrid-filterRowOperationLessOrEquals": "\u6307\u5b9a\u306e\u5024\u4ee5\u4e0b",
            "dxDataGrid-filterRowOperationGreater": "\u6307\u5b9a\u306e\u5024\u3088\u308a\u5927\u304d\u3044",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "\u6307\u5b9a\u306e\u5024\u4ee5\u4e0a",
            "dxDataGrid-filterRowOperationStartsWith": "\u6307\u5b9a\u306e\u5024\u3067\u59cb\u307e\u308b",
            "dxDataGrid-filterRowOperationContains": "\u6307\u5b9a\u306e\u5024\u3092\u542b\u3080",
            "dxDataGrid-filterRowOperationNotContains": "\u6307\u5b9a\u306e\u5024\u3092\u542b\u307e\u306a\u3044",
            "dxDataGrid-filterRowOperationEndsWith": "\u6307\u5b9a\u306e\u5024\u3067\u7d42\u308f\u308b",
            "dxDataGrid-filterRowOperationBetween": "\uff5e\u304b\u3089\uff5e\u306e\u9593",
            "dxDataGrid-filterRowOperationBetweenStartText": "\u958b\u59cb\u5024",
            "dxDataGrid-filterRowOperationBetweenEndText": "\u7d42\u4e86\u5024",
            "dxDataGrid-applyFilterText": "\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u9069\u7528",
            "dxDataGrid-trueText": "true",
            "dxDataGrid-falseText": "false",
            "dxDataGrid-sortingAscendingText": "\u6607\u9806\u306b\u4e26\u3079\u66ff\u3048",
            "dxDataGrid-sortingDescendingText": "\u964d\u9806\u306b\u4e26\u3079\u66ff\u3048",
            "dxDataGrid-sortingClearText": "\u4e26\u3079\u66ff\u3048\u3092\u30af\u30ea\u30a2",
            "dxDataGrid-editingSaveAllChanges": "\u5909\u66f4\u3092\u4fdd\u5b58",
            "dxDataGrid-editingCancelAllChanges": "\u5909\u66f4\u3092\u7834\u68c4",
            "dxDataGrid-editingAddRow": "\u884c\u3092\u8ffd\u52a0",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "{1} \u306e\u6700\u5c0f\u306f {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "{1} \u306e\u6700\u5c0f\u306f {0}",
            "dxDataGrid-summaryAvg": "Avg: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "{1} \u306e\u5e73\u5747\u306f {0}",
            "dxDataGrid-summarySum": "\u5408\u8a08: {0}",
            "dxDataGrid-summarySumOtherColumn": "{1} \u306e\u5408\u8a08\u306f {0}",
            "dxDataGrid-summaryCount": "\u7dcf\u6570: {0}",
            "dxDataGrid-columnFixingFix": "\u56fa\u5b9a",
            "dxDataGrid-columnFixingUnfix": "\u56fa\u5b9a\u306e\u89e3\u9664",
            "dxDataGrid-columnFixingLeftPosition": "\u5de6\u306b\u56fa\u5b9a",
            "dxDataGrid-columnFixingRightPosition": "\u53f3\u306b\u56fa\u5b9a",
            "dxDataGrid-exportTo": "\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",
            "dxDataGrid-exportToExcel": "Excel \u30d5\u30a1\u30a4\u30eb\u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",
            "dxDataGrid-exporting": "\u30a8\u30af\u30b9\u30dd\u30fc\u30c8...",
            "dxDataGrid-excelFormat": "Excel \u30d5\u30a1\u30a4\u30eb",
            "dxDataGrid-selectedRows": "\u9078\u629e\u3055\u308c\u305f\u884c",
            "dxDataGrid-exportAll": "\u3059\u3079\u3066\u306e\u30c7\u30fc\u30bf\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",
            "dxDataGrid-exportSelectedRows": "\u9078\u629e\u3055\u308c\u305f\u884c\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",
            "dxDataGrid-headerFilterEmptyValue": "(\u7a7a\u767d)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "\u30ad\u30e3\u30f3\u30bb\u30eb",
            "dxDataGrid-ariaColumn": "\u5217",
            "dxDataGrid-ariaValue": "\u5024",
            "dxDataGrid-ariaFilterCell": "\u30d5\u30a3\u30eb\u30bf\u30fc \u30bb\u30eb",
            "dxDataGrid-ariaCollapse": "\u6298\u308a\u305f\u305f\u3080",
            "dxDataGrid-ariaExpand": "\u5c55\u958b",
            "dxDataGrid-ariaDataGrid": "\u30c7\u30fc\u30bf \u30b0\u30ea\u30c3\u30c9",
            "dxDataGrid-ariaSearchInGrid": "\u30c7\u30fc\u30bf \u30b0\u30ea\u30c3\u30c9\u5185\u3067\u691c\u7d22",
            "dxDataGrid-ariaSelectAll": "\u3059\u3079\u3066\u3092\u9078\u629e",
            "dxDataGrid-ariaSelectRow": "\u884c\u306e\u9078\u629e",
            "dxDataGrid-filterBuilderPopupTitle": "\u30d5\u30a3\u30eb\u30bf\u30fc \u30d3\u30eb\u30c0\u30fc",
            "dxDataGrid-filterPanelCreateFilter": "\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u4f5c\u6210",
            "dxDataGrid-filterPanelClearFilter": "\u30af\u30ea\u30a2",
            "dxDataGrid-filterPanelFilterEnabledHint": "\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u6709\u52b9\u5316",
            "dxTreeList-ariaTreeList": "\u30c4\u30ea\u30fc \u30ea\u30b9\u30c8",
            "dxTreeList-editingAddRowToNode": "\u8ffd\u52a0",
            "dxPager-infoText": "\u30da\u30fc\u30b8 {0} / {1} ({2} \u30a2\u30a4\u30c6\u30e0)",
            "dxPager-pagesCountText": "/",
            "dxPivotGrid-grandTotal": "\u7dcf\u8a08",
            "dxPivotGrid-total": "{0} \u5408\u8a08",
            "dxPivotGrid-fieldChooserTitle": "\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u9078\u629e",
            "dxPivotGrid-showFieldChooser": "\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u9078\u629e\u3092\u8868\u793a",
            "dxPivotGrid-expandAll": "\u3059\u3079\u3066\u5c55\u958b",
            "dxPivotGrid-collapseAll": "\u3059\u3079\u3066\u6298\u308a\u305f\u305f\u3080",
            "dxPivotGrid-sortColumnBySummary": '\u3053\u306e\u5217\u3067 "{0}" \u3092\u4e26\u3079\u66ff\u3048',
            "dxPivotGrid-sortRowBySummary": "\u3053\u306e\u884c\u3067 {0} \u3092\u4e26\u3079\u66ff\u3048",
            "dxPivotGrid-removeAllSorting": "\u3059\u3079\u3066\u306e\u4e26\u3079\u66ff\u3048\u3092\u524a\u9664",
            "dxPivotGrid-dataNotAvailable": "N/A",
            "dxPivotGrid-rowFields": "\u884c\u306e\u30d5\u30a3\u30fc\u30eb\u30c9",
            "dxPivotGrid-columnFields": "\u5217\u306e\u30d5\u30a3\u30fc\u30eb\u30c9",
            "dxPivotGrid-dataFields": "\u30c7\u30fc\u30bf \xa0\u30d5\u30a3\u30fc\u30eb\u30c9",
            "dxPivotGrid-filterFields": "\u30d5\u30a3\u30eb\u30bf\u30fc \u30d5\u30a3\u30fc\u30eb\u30c9",
            "dxPivotGrid-allFields": "\u3059\u3079\u3066\u306e\u30d5\u30a3\u30fc\u30eb\u30c9",
            "dxPivotGrid-columnFieldArea": "\u5217\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u3053\u3061\u3089\u3078\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7",
            "dxPivotGrid-dataFieldArea": "\u30c7\u30fc\u30bf \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u3053\u3061\u3089\u3078\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7",
            "dxPivotGrid-rowFieldArea": "\u884c\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u3053\u3061\u3089\u3078\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7",
            "dxPivotGrid-filterFieldArea": "\u30d5\u30a3\u30eb\u30bf\u30fc \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u3053\u3061\u3089\u3078\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7",
            "dxScheduler-editorLabelTitle": "\u4ef6\u540d",
            "dxScheduler-editorLabelStartDate": "\u958b\u59cb\u6642\u523b",
            "dxScheduler-editorLabelEndDate": "\u7d42\u4e86\u6642\u523b",
            "dxScheduler-editorLabelDescription": "\u8aac\u660e",
            "dxScheduler-editorLabelRecurrence": "\u7e70\u308a\u8fd4\u3057",
            "dxScheduler-openAppointment": "\u30aa\u30fc\u30d7\u30f3\u306e\u4e88\u5b9a",
            "dxScheduler-recurrenceNever": "\u7121\u52b9",
            "dxScheduler-recurrenceDaily": "\u65e5\u9593\u6bce\u65e5",
            "dxScheduler-recurrenceWeekly": "\u6bce\u9031",
            "dxScheduler-recurrenceMonthly": "\u6bce\u6708",
            "dxScheduler-recurrenceYearly": "\u6bce\u5e74",
            "dxScheduler-recurrenceRepeatEvery": "\u9593\u9694:",
            "dxScheduler-recurrenceRepeatOn": "\u3053\u306e\u65e5\u306b\u7e70\u308a\u8fd4\u3059",
            "dxScheduler-recurrenceEnd": "\u30ea\u30d4\u30fc\u30c8\u306e\u7d42\u4e86\u65e5",
            "dxScheduler-recurrenceAfter": "\u6b21\u306e\u767a\u751f\u56de\u6570\u5f8c\u306b\u7d42\u4e86",
            "dxScheduler-recurrenceOn": "\u30ea\u30d4\u30fc\u30c8\u89e3\u9664\u306e\u65e5\u4ed8",
            "dxScheduler-recurrenceRepeatDaily": "\u65e5\u5f8c",
            "dxScheduler-recurrenceRepeatWeekly": "\u9031\u9593\u5f8c",
            "dxScheduler-recurrenceRepeatMonthly": "\u30ab\u6708\u5f8c",
            "dxScheduler-recurrenceRepeatYearly": "\u5e74\u5f8c",
            "dxScheduler-switcherDay": "\u65e5\u30d3\u30e5\u30fc",
            "dxScheduler-switcherWeek": "\u9031\u30d3\u30e5\u30fc",
            "dxScheduler-switcherWorkWeek": "\u7a3c\u50cd\u9031\u30d3\u30e5\u30fc",
            "dxScheduler-switcherMonth": "\u6708\u30d3\u30e5\u30fc",
            "dxScheduler-switcherTimelineDay": "\u30bf\u30a4\u30e0\u30e9\u30a4\u30f3 \u65e5\u30d3\u30e5\u30fc",
            "dxScheduler-switcherTimelineWeek": "\u30bf\u30a4\u30e0\u30e9\u30a4\u30f3 \u9031\u30d3\u30e5\u30fc",
            "dxScheduler-switcherTimelineWorkWeek": "\u30bf\u30a4\u30e0\u30e9\u30a4\u30f3 \u7a3c\u50cd\u9031\u30d3\u30e5\u30fc",
            "dxScheduler-switcherTimelineMonth": "\u30bf\u30a4\u30e0\u30e9\u30a4\u30f3 \u6708\u30d3\u30e5\u30fc",
            "dxScheduler-switcherAgenda": "\u4e88\u5b9a\u4e00\u89a7",
            "dxScheduler-recurrenceRepeatOnDate": "\u6b21\u306e\u65e5\u4ed8\u306b\u7d42\u4e86",
            "dxScheduler-recurrenceRepeatCount": "\u51fa\u73fe",
            "dxScheduler-allDay": "\u7d42\u65e5\u30a4\u30d9\u30f3\u30c8",
            "dxScheduler-confirmRecurrenceEditMessage": "\u3053\u306e\u4e88\u5b9a\u306e\u307f\u3092\u7de8\u96c6\u3057\u307e\u3059\u304b\u3001\u307e\u305f\u306f\u5b9a\u671f\u7684\u306a\u4e88\u5b9a\u3092\u7de8\u96c6\u3057\u307e\u3059\u304b\uff1f",
            "dxScheduler-confirmRecurrenceDeleteMessage": "\u3053\u306e\u4e88\u5b9a\u306e\u307f\u3092\u524a\u9664\u3057\u307e\u3059\u304b\u3001\u307e\u305f\u306f\u5b9a\u671f\u7684\u306a\u4e88\u5b9a\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
            "dxScheduler-confirmRecurrenceEditSeries": "\u5b9a\u671f\u7684\u306a\u30a2\u30a4\u30c6\u30e0\u3092\u7de8\u96c6",
            "dxScheduler-confirmRecurrenceDeleteSeries": "\u5b9a\u671f\u7684\u306a\u30a2\u30a4\u30c6\u30e0\u3092\u524a\u9664",
            "dxScheduler-confirmRecurrenceEditOccurrence": "\u4e88\u5b9a\u3092\u7de8\u96c6",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "\u4e88\u5b9a\u3092\u524a\u9664",
            "dxScheduler-noTimezoneTitle": "\u6642\u9593\u5e2f\u306a\u3057",
            "dxScheduler-moreAppointments": "\u305d\u306e\u4ed6 {0} \u3064\u9078\u629e",
            "dxCalendar-todayButtonText": "\u4eca\u65e5",
            "dxCalendar-ariaWidgetName": "\u30ab\u30ec\u30f3\u30c0\u30fc",
            "dxColorView-ariaRed": "\u8d64",
            "dxColorView-ariaGreen": "\u7dd1",
            "dxColorView-ariaBlue": "\u9752",
            "dxColorView-ariaAlpha": "\u900f\u660e\u5ea6",
            "dxColorView-ariaHex": "\u8272\u30b3\u30fc\u30c9",
            "dxTagBox-selected": "{0} \u3064\u9078\u629e\u6e08\u307f",
            "dxTagBox-allSelected": "\u3059\u3079\u3066\u9078\u629e\u6e08\u307f ({0})",
            "dxTagBox-moreSelected": "\u305d\u306e\u4ed6 {0} \u3064\u9078\u629e",
            "vizExport-printingButtonText": "\u5370\u5237",
            "vizExport-titleMenuText": "\u30a8\u30af\u30b9\u30dd\u30fc\u30c8 / \u5370\u5237",
            "vizExport-exportButtonText": "{0} \u30d5\u30a1\u30a4\u30eb",
            "dxFilterBuilder-and": "And",
            "dxFilterBuilder-or": "Or",
            "dxFilterBuilder-notAnd": "Not And",
            "dxFilterBuilder-notOr": "Not Or",
            "dxFilterBuilder-addCondition": "\u6761\u4ef6\u306e\u8ffd\u52a0",
            "dxFilterBuilder-addGroup": "\u30b0\u30eb\u30fc\u30d7\u306e\u8ffd\u52a0",
            "dxFilterBuilder-enterValueText": "\u5024\u3092\u5165\u529b",
            "dxFilterBuilder-filterOperationEquals": "\u6307\u5b9a\u306e\u5024\u306b\u7b49\u3057\u3044",
            "dxFilterBuilder-filterOperationNotEquals": "\u6307\u5b9a\u306e\u5024\u306b\u7b49\u3057\u304f\u306a\u3044",
            "dxFilterBuilder-filterOperationLess": "\u6307\u5b9a\u306e\u5024\u3088\u308a\u5c0f\u3055\u3044",
            "dxFilterBuilder-filterOperationLessOrEquals": "\u6307\u5b9a\u306e\u5024\u4ee5\u4e0b",
            "dxFilterBuilder-filterOperationGreater": "\u6307\u5b9a\u306e\u5024\u3088\u308a\u5927\u304d\u3044",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "\u6307\u5b9a\u306e\u5024\u4ee5\u4e0a",
            "dxFilterBuilder-filterOperationStartsWith": "\u6307\u5b9a\u306e\u5024\u3067\u59cb\u307e\u308b",
            "dxFilterBuilder-filterOperationContains": "\u6307\u5b9a\u306e\u5024\u3092\u542b\u3080",
            "dxFilterBuilder-filterOperationNotContains": "\u6307\u5b9a\u306e\u5024\u3092\u542b\u307e\u306a\u3044",
            "dxFilterBuilder-filterOperationEndsWith": "\u6307\u5b9a\u306e\u5024\u3067\u7d42\u308f\u308b",
            "dxFilterBuilder-filterOperationIsBlank": "\u7a7a\u767d\u3067\u3042\u308b",
            "dxFilterBuilder-filterOperationIsNotBlank": "\u7a7a\u767d\u3067\u306f\u306a\u3044",
            "dxFilterBuilder-filterOperationBetween": "\uff5e\u304b\u3089\uff5e\u306e\u9593",
            "dxFilterBuilder-filterOperationAnyOf": "\u3069\u3061\u3089\u304b\u3092\u542b\u3080",
            "dxFilterBuilder-filterOperationNoneOf": "\u3059\u3079\u3066\u542b\u307e\u306a\u3044",
            "dxHtmlEditor-dialogColorCaption": "\u30d5\u30a9\u30f3\u30c8\u306e\u8272\u3092\u5909\u66f4",
            "dxHtmlEditor-dialogBackgroundCaption": "\u80cc\u666f\u8272\u3092\u5909\u66f4",
            "dxHtmlEditor-dialogLinkCaption": "\u30ea\u30f3\u30af\u3092\u8ffd\u52a0",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "\u30c6\u30ad\u30b9\u30c8",
            "dxHtmlEditor-dialogLinkTargetField": "\u30ea\u30f3\u30af\u3092\u65b0\u3057\u3044\u30a6\u30a3\u30f3\u30c9\u30a6\u3067\u958b\u304f",
            "dxHtmlEditor-dialogImageCaption": "\u753b\u50cf\u306e\u8ffd\u52a0",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "\u4ee3\u66ff\u30c6\u30ad\u30b9\u30c8",
            "dxHtmlEditor-dialogImageWidthField": "\u5e45 (px)",
            "dxHtmlEditor-dialogImageHeightField": "\u9ad8\u3055 (px)",
            "dxHtmlEditor-heading": "\u898b\u51fa\u3057",
            "dxHtmlEditor-normalText": "\u6a19\u6e96\u30c6\u30ad\u30b9\u30c8",
            "dxFileManager-newDirectoryName": "\u7121\u984c\u306e\u30d5\u30a9\u30eb\u30c0",
            "dxFileManager-rootDirectoryName": "\u30d5\u30a1\u30a4\u30eb",
            "dxFileManager-errorNoAccess": "\u30a2\u30af\u30bb\u30b9\u304c\u62d2\u5426\u3055\u308c\u307e\u3057\u305f\u3002\u64cd\u4f5c\u3092\u5b8c\u4e86\u3067\u304d\u307e\u305b\u3093\u3002",
            "dxFileManager-errorDirectoryExistsFormat": "\u30c7\u30a3\u30ec\u30af\u30c8\u30ea {0} \u306f\u65e2\u306b\u5b58\u5728\u3057\u307e\u3059\u3002",
            "dxFileManager-errorFileExistsFormat": "\u30d5\u30a1\u30a4\u30eb {0} \u306f\u65e2\u306b\u5b58\u5728\u3057\u307e\u3059\u3002",
            "dxFileManager-errorFileNotFoundFormat": "\u30d5\u30a1\u30a4\u30eb {0} \u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3002",
            "dxFileManager-errorDirectoryNotFoundFormat": "\u30c7\u30a3\u30ec\u30af\u30c8\u30ea '{0}' \u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3002",
            "dxFileManager-errorWrongFileExtension": "\u62e1\u5f35\u5b50\u304c\u8a31\u53ef\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002",
            "dxFileManager-errorMaxFileSizeExceeded": "\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30a4\u30ba\u304c\u6700\u5927\u8a31\u5bb9\u30b5\u30a4\u30ba\u3092\u8d85\u3048\u3066\u3044\u307e\u3059\u3002",
            "dxFileManager-errorInvalidSymbols": "\u540d\u524d\u306b\u7121\u52b9\u306a\u6587\u5b57\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002",
            "dxFileManager-errorDefault": "\u7279\u5b9a\u3067\u304d\u306a\u3044\u30a8\u30e9\u30fc",
            "dxFileManager-commandCreate": "\u65b0\u3057\u3044\u30c7\u30a3\u30ec\u30af\u30c8\u30ea",
            "dxFileManager-commandRename": "\u540d\u524d\u306e\u5909\u66f4",
            "dxFileManager-commandMove": "\u79fb\u52d5",
            "dxFileManager-commandCopy": "\u30b3\u30d4\u30fc",
            "dxFileManager-commandDelete": "\u524a\u9664",
            "dxFileManager-commandDownload": "\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",
            "dxFileManager-commandUpload": "\u30d5\u30a1\u30a4\u30eb\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9",
            "dxFileManager-commandRefresh": "\u66f4\u65b0",
            "dxFileManager-commandThumbnails": "\u7e2e\u5c0f\u8868\u793a",
            "dxFileManager-commandDetails": "\u8a73\u7d30\u8868\u793a",
            "dxFileManager-commandClear": "\u9078\u629e\u306e\u30af\u30ea\u30a2",
            "dxFileManager-dialogDirectoryChooserTitle": "\u79fb\u52d5\u5148\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",
            "dxFileManager-dialogDirectoryChooserButtonText": "\u9078\u629e",
            "dxFileManager-dialogRenameItemTitle": "\u540d\u524d\u306e\u5909\u66f4",
            "dxFileManager-dialogRenameItemButtonText": "\u4fdd\u5b58",
            "dxFileManager-dialogCreateDirectoryTitle": "\u65b0\u3057\u3044\u30c7\u30a3\u30ec\u30af\u30c8\u30ea",
            "dxFileManager-dialogCreateDirectoryButtonText": "\u4f5c\u6210",
            "dxFileManager-editingCreateSingleItemProcessingMessage": "{0} \u5185\u306b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u4f5c\u6210\u4e2d",
            "dxFileManager-editingCreateSingleItemSuccessMessage": "{0} \u5185\u306b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f",
            "dxFileManager-editingCreateSingleItemErrorMessage": "\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u4f5c\u6210\u3055\u308c\u307e\u305b\u3093\u3067\u3057\u305f",
            "dxFileManager-editingCreateCommonErrorMessage": "\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u4f5c\u6210\u3055\u308c\u307e\u305b\u3093\u3067\u3057\u305f",
            "dxFileManager-editingRenameSingleItemProcessingMessage": "{0} \u5185\u306b\u9805\u76ee\u306e\u540d\u524d\u3092\u5909\u66f4\u4e2d",
            "dxFileManager-editingRenameSingleItemSuccessMessage": "{0} \u5185\u306b\u9805\u76ee\u306e\u540d\u524d\u3092\u5909\u66f4\u3057\u307e\u3057\u305f",
            "dxFileManager-editingRenameSingleItemErrorMessage": "\u9805\u76ee\u306e\u540d\u524d\u304c\u5909\u66f4\u3055\u308c\u307e\u305b\u3093\u3067\u3057\u305f",
            "dxFileManager-editingRenameCommonErrorMessage": "\u9805\u76ee\u306e\u540d\u524d\u304c\u5909\u66f4\u3055\u308c\u307e\u305b\u3093\u3067\u3057\u305f",
            "dxFileManager-editingDeleteSingleItemProcessingMessage": "{0} \u304b\u3089\u9805\u76ee\u3092\u524a\u9664\u4e2d",
            "dxFileManager-editingDeleteMultipleItemsProcessingMessage": "{1} \u304b\u3089 {0} \u9805\u76ee\u3092\u524a\u9664\u4e2d",
            "dxFileManager-editingDeleteSingleItemSuccessMessage": "{0} \u304b\u3089\u9805\u76ee\u3092\u524a\u9664\u3057\u307e\u3057\u305f",
            "dxFileManager-editingDeleteMultipleItemsSuccessMessage": "{1} \u304b\u3089 {0} \u9805\u76ee\u3092\u524a\u9664\u3057\u307e\u3057\u305f",
            "dxFileManager-editingDeleteSingleItemErrorMessage": "\u9805\u76ee\u304c\u524a\u9664\u3055\u308c\u307e\u305b\u3093\u3067\u3057\u305f",
            "dxFileManager-editingDeleteMultipleItemsErrorMessage": "{0} \u9805\u76ee\u304c\u524a\u9664\u3055\u308c\u307e\u305b\u3093\u3067\u3057\u305f",
            "dxFileManager-editingDeleteCommonErrorMessage": "\u4e00\u90e8\u306e\u9805\u76ee\u304c\u524a\u9664\u3055\u308c\u307e\u305b\u3093\u3067\u3057\u305f",
            "dxFileManager-editingMoveSingleItemProcessingMessage": "\u9805\u76ee\u3092 {0} \u306b\u79fb\u52d5\u4e2d",
            "dxFileManager-editingMoveMultipleItemsProcessingMessage": "{0} \u9805\u76ee\u3092 {1} \u306b\u79fb\u52d5\u4e2d",
            "dxFileManager-editingMoveSingleItemSuccessMessage": "\u9805\u76ee\u3092 {0} \u306b\u79fb\u52d5\u3057\u307e\u3057\u305f",
            "dxFileManager-editingMoveMultipleItemsSuccessMessage": "{0} \u9805\u76ee\u3092 {1} \u306b\u79fb\u52d5\u3057\u307e\u3057\u305f",
            "dxFileManager-editingMoveSingleItemErrorMessage": "\u9805\u76ee\u304c\u79fb\u52d5\u3055\u308c\u307e\u305b\u3093\u3067\u3057\u305f",
            "dxFileManager-editingMoveMultipleItemsErrorMessage": "{0} \u9805\u76ee\u304c\u79fb\u52d5\u3055\u308c\u307e\u305b\u3093\u3067\u3057\u305f",
            "dxFileManager-editingMoveCommonErrorMessage": "\u4e00\u90e8\u306e\u9805\u76ee\u304c\u79fb\u52d5\u3055\u308c\u307e\u305b\u3093\u3067\u3057\u305f",
            "dxFileManager-editingCopySingleItemProcessingMessage": "\u9805\u76ee\u3092 {0} \u306b\u30b3\u30d4\u30fc\u4e2d",
            "dxFileManager-editingCopyMultipleItemsProcessingMessage": "{0} \u9805\u76ee\u3092 {1} \u306b\u30b3\u30d4\u30fc\u4e2d",
            "dxFileManager-editingCopySingleItemSuccessMessage": "\u9805\u76ee\u3092 {0} \u306b\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f",
            "dxFileManager-editingCopyMultipleItemsSuccessMessage": "{0} \u9805\u76ee\u3092 {1} \u306b\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f",
            "dxFileManager-editingCopySingleItemErrorMessage": "\u9805\u76ee\u304c\u30b3\u30d4\u30fc\u3055\u308c\u307e\u305b\u3093\u3067\u3057\u305f",
            "dxFileManager-editingCopyMultipleItemsErrorMessage": "{0} \u9805\u76ee\u304c\u30b3\u30d4\u30fc\u3055\u308c\u307e\u305b\u3093\u3067\u3057\u305f",
            "dxFileManager-editingCopyCommonErrorMessage": "\u4e00\u90e8\u306e\u9805\u76ee\u304c\u30b3\u30d4\u30fc\u3055\u308c\u307e\u305b\u3093\u3067\u3057\u305f",
            "dxFileManager-editingUploadSingleItemProcessingMessage": "\u9805\u76ee\u3092 {0} \u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u4e2d",
            "dxFileManager-editingUploadMultipleItemsProcessingMessage": "{0} \u9805\u76ee\u3092 {1} \u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u4e2d",
            "dxFileManager-editingUploadSingleItemSuccessMessage": "\u9805\u76ee\u3092 {0} \u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3057\u305f",
            "dxFileManager-editingUploadMultipleItemsSuccessMessage": "{0} \u9805\u76ee\u3092 {1} \u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3057\u305f",
            "dxFileManager-editingUploadSingleItemErrorMessage": "\u9805\u76ee\u304c\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u307e\u305b\u3093\u3067\u3057\u305f",
            "dxFileManager-editingUploadMultipleItemsErrorMessage": "{0} \u9805\u76ee\u304c\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u307e\u305b\u3093\u3067\u3057\u305f",
            "dxFileManager-editingUploadCanceledMessage": "\u30ad\u30e3\u30f3\u30bb\u30eb\u3057\u307e\u3057\u305f",
            "dxFileManager-listDetailsColumnCaptionName": "\u30d5\u30a1\u30a4\u30eb\u540d",
            "dxFileManager-listDetailsColumnCaptionDateModified": "\u66f4\u65b0\u65e5",
            "dxFileManager-listDetailsColumnCaptionFileSize": "\u30d5\u30a1\u30a4\u30eb \u30b5\u30a4\u30ba",
            "dxFileManager-listThumbnailsTooltipTextSize": "\u30b5\u30a4\u30ba",
            "dxFileManager-listThumbnailsTooltipTextDateModified": "\u66f4\u65b0\u65e5",
            "dxFileManager-notificationProgressPanelTitle": "\u9032\u884c\u72b6\u6cc1",
            "dxFileManager-notificationProgressPanelEmptyListText": "\u64cd\u4f5c\u304c\u3042\u308a\u307e\u305b\u3093",
            "dxFileManager-notificationProgressPanelOperationCanceled": "\u30ad\u30e3\u30f3\u30bb\u30eb\u3057\u307e\u3057\u305f",
            "dxDiagram-categoryGeneral": "\u4e00\u822c",
            "dxDiagram-categoryFlowchart": "\u30d5\u30ed\u30fc\u30c1\u30e3\u30fc\u30c8",
            "dxDiagram-categoryOrgChart": "\u7d44\u7e54\u306e\u30d5\u30ed\u30fc\u30fb\u30c1\u30e3\u30fc\u30c8",
            "dxDiagram-categoryContainers": "\u30b3\u30f3\u30c6\u30ca\u30fc",
            "dxDiagram-categoryCustom": "\u30ab\u30b9\u30bf\u30e0",
            "dxDiagram-commandProperties": "\u30d7\u30ed\u30d1\u30c6\u30a3",
            "dxDiagram-commandExport": "\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",
            "dxDiagram-commandExportToSvg": "SVG \u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",
            "dxDiagram-commandExportToPng": "PNG \u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",
            "dxDiagram-commandExportToJpg": "\u3000JPEG \u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",
            "dxDiagram-commandUndo": "\u5143\u306b\u623b\u3059",
            "dxDiagram-commandRedo": "\u3084\u308a\u76f4\u3059",
            "dxDiagram-commandFontName": "\u30d5\u30a9\u30f3\u30c8\u540d",
            "dxDiagram-commandFontSize": "\u30d5\u30a9\u30f3\u30c8 \u30b5\u30a4\u30ba",
            "dxDiagram-commandBold": "\u592a\u5b57",
            "dxDiagram-commandItalic": "\u659c\u4f53",
            "dxDiagram-commandUnderline": "\u4e0b\u7dda",
            "dxDiagram-commandTextColor": "\u6587\u5b57\u306e\u8272",
            "dxDiagram-commandLineColor": "\u7dda\u306e\u8272",
            "dxDiagram-commandFillColor": "\u5857\u308a\u3064\u3076\u3057\u306e\u8272",
            "dxDiagram-commandAlignLeft": "\u5de6\u63c3\u3048",
            "dxDiagram-commandAlignCenter": "\u4e2d\u592e\u63c3\u3048",
            "dxDiagram-commandAlignRight": "\u53f3\u63c3\u3048",
            "dxDiagram-commandConnectorLineType": "\u30b3\u30cd\u30af\u30bf \u30e9\u30a4\u30f3\u306e\u30bf\u30a4\u30d7",
            "dxDiagram-commandConnectorLineStraight": "\u76f4\u7dda",
            "dxDiagram-commandConnectorLineOrthogonal": "\u76f4\u4ea4",
            "dxDiagram-commandConnectorLineStart": "\u30b3\u30cd\u30af\u30bf \u30e9\u30a4\u30f3\u306e\u958b\u59cb",
            "dxDiagram-commandConnectorLineEnd": "\u30b3\u30cd\u30af\u30bf \u30e9\u30a4\u30f3\u306e\u7d42\u4e86",
            "dxDiagram-commandConnectorLineNone": "\u306a\u3057",
            "dxDiagram-commandConnectorLineArrow": "\u77e2\u5370",
            "dxDiagram-commandAutoLayout": "\u81ea\u52d5\u30ec\u30a4\u30a2\u30a6\u30c8",
            "dxDiagram-commandAutoLayoutTree": "\u30c4\u30ea\u30fc",
            "dxDiagram-commandAutoLayoutLayered": "\u968e\u5c64",
            "dxDiagram-commandAutoLayoutHorizontal": "\u6c34\u5e73\u65b9\u5411",
            "dxDiagram-commandAutoLayoutVertical": "\u5782\u76f4\u65b9\u5411",
            "dxDiagram-commandFullscreen": "\u5168\u753b\u9762\u8868\u793a",
            "dxDiagram-commandUnits": "\u5358\u4f4d",
            "dxDiagram-commandPageSize": "\u30da\u30fc\u30b8 \u30b5\u30a4\u30ba",
            "dxDiagram-commandPageOrientation": "\u30da\u30fc\u30b8\u306e\u5411\u304d",
            "dxDiagram-commandPageOrientationLandscape": "\u6a2a",
            "dxDiagram-commandPageOrientationPortrait": "\u7e26",
            "dxDiagram-commandPageColor": "\u30da\u30fc\u30b8\u306e\u8272",
            "dxDiagram-commandShowGrid": "\u30b0\u30ea\u30c3\u30c9\u306e\u8868\u793a",
            "dxDiagram-commandSnapToGrid": "\u30b0\u30ea\u30c3\u30c9\u306b\u5408\u308f\u305b\u308b",
            "dxDiagram-commandGridSize": "\u30b0\u30ea\u30c3\u30c9 \u30b5\u30a4\u30ba",
            "dxDiagram-commandZoomLevel": "\u30ba\u30fc\u30e0\u306e\u30ec\u30d9\u30eb",
            "dxDiagram-commandAutoZoom": "\u81ea\u52d5\u30ba\u30fc\u30e0",
            "dxDiagram-commandSimpleView": "\u7c21\u6613\u30d3\u30e5\u30fc",
            "dxDiagram-commandCut": "\u5207\u308a\u53d6\u308a",
            "dxDiagram-commandCopy": "\u30b3\u30d4\u30fc",
            "dxDiagram-commandPaste": "\u8cbc\u308a\u4ed8\u3051",
            "dxDiagram-commandSelectAll": "\u3059\u3079\u3066\u9078\u629e",
            "dxDiagram-commandDelete": "\u524a\u9664",
            "dxDiagram-commandBringToFront": "\u6700\u524d\u9762\u3078\u79fb\u52d5",
            "dxDiagram-commandSendToBack": "\u6700\u80cc\u9762\u3078\u79fb\u52d5",
            "dxDiagram-commandLock": "\u30ed\u30c3\u30af",
            "dxDiagram-commandUnlock": "\u30ed\u30c3\u30af\u89e3\u9664",
            "dxDiagram-commandInsertShapeImage": "\u753b\u50cf\u306e\u633f\u5165...",
            "dxDiagram-commandEditShapeImage": "\u753b\u50cf\u306e\u5909\u66f4...",
            "dxDiagram-commandDeleteShapeImage": "\u753b\u50cf\u306e\u524a\u9664",
            "dxDiagram-unitIn": "in",
            "dxDiagram-unitCm": "cm",
            "dxDiagram-unitPx": "px",
            "dxDiagram-dialogButtonOK": "OK",
            "dxDiagram-dialogButtonCancel": "\u30ad\u30e3\u30f3\u30bb\u30eb",
            "dxDiagram-dialogInsertShapeImageTitle": "\u753b\u50cf\u306e\u633f\u5165",
            "dxDiagram-dialogEditShapeImageTitle": "\u753b\u50cf\u306e\u5909\u66f4",
            "dxDiagram-dialogEditShapeImageSelectButton": "\u753b\u50cf\u306e\u9078\u629e",
            "dxDiagram-dialogEditShapeImageLabelText": "\u307e\u305f\u306f\u30d5\u30a1\u30a4\u30eb\u3092\u3053\u3053\u306b\u30c9\u30ed\u30c3\u30d7\u3057\u3066\u304f\u3060\u3055\u3044"
        }
    })
});
