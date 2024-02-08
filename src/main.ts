import { showUI } from '@create-figma-plugin/utilities'

export default function () {
  figma.codegen.on('preferenceschange', (event: CodegenPreferencesEvent) => {
    console.log("preferenceschange", event);
    if (event.propertyName === 'editor') {
      showUI({ height: 240, width: 320 })
    } 
    return Promise.resolve();
  });
}
