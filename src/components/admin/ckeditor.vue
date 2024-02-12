<template>
  <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from "@ckeditor/ckeditor5-vue"

export default {
  name: 'ChildComponent',
  components: {
    ckeditor: CKEditor.component
  },
  props: {
    editorConfig: {
      type: Object,
      default: () => ({})
    },
    defaultContent: {
      type: String, // Ou le type approprié pour votre contenu par défaut
      default: ""
    }
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: this.defaultContent
    };
  },
  methods: {
    
  },
  watch: {
    defaultContent(newValue) {
      this.editorData = newValue;
    }
  }
}
</script>
<style>
  
</style>
