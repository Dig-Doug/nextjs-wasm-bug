# nextjs-wasm-bug

To regenerate wasm for nextjs (generated files are already checked in):

```bash
bazel build //wasm-lib:hello_world_bundler_wasm_bindgen
cp bazel-bin/wasm-lib/hello_world_bundler_wasm_* my-app/generated
```
