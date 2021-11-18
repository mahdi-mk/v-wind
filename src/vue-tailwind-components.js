import { devMode, registerVuexStore } from './utils';

export default class VueTailwindComponent {

  constructor(options = {}) {
    const defaults = {
      accessorName: '$vtc'
    };
    this.options = { ...defaults, ...options };
  }

  ////////////////////////////////////
  // YOU MAY NOT NEED TO EDIT BELOW //
  ////////////////////////////////////

  initialized = false;

  init(Vue, store) {
    if (devMode() && !install.installed) {
      console.warn(
        `[vue-tailwind-components] not installed. Make sure to call \`Vue.use(VueTailwindComponents)\` before init root instance.`
      );
    }

    if (this.initialized) {
      return;
    }

    VuePlugin.register(Vue, this.options, store);
    this.initialized = true;
  }
}

export function install(Vue) {
  const isDev = devMode();
  if (install.installed && Vue) {
    if (isDev) {
      console.warn(
        '[vue-plugin] already installed. Vue.use(VuePlugin) should be called only once.'
      );
    }
    return;
  }

  Vue.mixin({
    /**
     * VuePlugin init hook, injected into each instances init hooks list.
     */
    beforeCreate() {
      const { myPluginSettings, store, parent } = this.$options;

      let instance = null;
      if (myPluginSettings) {
        instance =
          typeof myPluginSettings === 'function'
            ? new myPluginSettings()
            : new VuePlugin(myPluginSettings);
        // Inject store
        instance.init(Vue, store);
      } else if (parent && parent.__$VuePluginInstance) {
        instance = parent.__$VuePluginInstance;
        instance.init(Vue, parent.$store);
      }

      if (instance) {
        // Store helper for internal use
        this.__$VuePluginInstance = instance;
        this[instance.options.accessorName] = instance;
      }
    },

    ...VuePlugin.mixin()
  });

  install.installed = true;
  if (isDev) {
    console.info('[vue-plugin] is plugged in.');
  }
}

VuePlugin.install = install;
