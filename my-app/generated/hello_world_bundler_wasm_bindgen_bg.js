import * as wasm from './hello_world_bundler_wasm_bindgen_bg.wasm';

/**
* @param {number} i
* @returns {number}
*/
export function double(i) {
    var ret = wasm.double(i);
    return ret;
}

