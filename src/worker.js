/*
 * @Author: 解丹丹 xiedandan@hikvision.com.cn
 * @Date: 2025-04-21 19:46:50
 * @LastEditors: 解丹丹 xiedandan@hikvision.com.cn
 * @LastEditTime: 2025-04-21 20:32:53
 * @FilePath: \vue3_vite_cesium_ts\src\worker.js
 * @Description: 
 * 
 * Copyright (c) 2025, All Rights Reserved. 
 */
addEventListener('message', function(evt) {
    console.log(worker);
    console.log(self);
    debugger
    let total = 0;
    let num = evt.data;
    for(let i = 0; i< num; i++) {
        total += i;
    }
    postMessage(total);
});