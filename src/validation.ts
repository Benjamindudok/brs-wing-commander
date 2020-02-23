import Vue from 'vue';
import {ValidationProvider, extend, ValidationObserver} from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', required);

// Register it globally
Vue.component('validation-provider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver);