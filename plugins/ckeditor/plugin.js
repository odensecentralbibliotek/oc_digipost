(function($) {
CKEDITOR.plugins.add( 'oc_digitpost_plugin', {
  init: function( editor )
  {
   editor.addCommand( 'oc_digipost', {
    exec : function( editor ) {
     //here is where we tell CKEditor what to do.
     var Mailboxid = Drupal.settings.oc_digipost.oc_digipost_mailboxids;
     var DigiPostUrl = Drupal.settings.oc_digipost.oc_digipost_url;
     var BtnText = "Skriv til os";
     
     var DeepLink = DigiPostUrl + "function=index&mailboxid=" + Mailboxid;
          
     
     var writer = new CKEDITOR.htmlWriter();
        writer.openTag( 'a' );
        writer.attribute( 'class', 'btn-info' );
        writer.attribute( 'href', DigiPostUrl );
        writer.openTagClose( 'a' );
        writer.text( BtnText );
        writer.closeTag( 'a' );
        editor.insertHtml( writer.getHtml()  );
    }
   });
   editor.ui.addButton( 'oc_digitpost_button', {
    label: 'Indsæt digital post link', //this is the tooltip text for the button
    command: 'oc_digipost',
    icon: this.path + 'digipost_icon.png',
    toolbar: 'insert'
   });
  }
});
})(jQuery);