(function($) {
CKEDITOR.plugins.add( 'oc_digitpost_plugin', {
  init: function( editor )
  {
   editor.addCommand( 'oc_digipost', {
    exec : function( editor ) {
     //Read backend configured settings for the digitalpost box.
     var Mailboxid = Drupal.settings.oc_digipost.oc_digipost_mailboxids;
     var DigiPostUrl = Drupal.settings.oc_digipost.oc_digipost_url;
     var SubjectId = Drupal.settings.oc_digipost.oc_digipost_url;
     
     var BtnText = Drupal.settings.oc_digipost.oc_digipost_btntext;
     var DeepLink = DigiPostUrl + "function=inbox";
     
     if(Mailboxid != undefined && Mailboxid != "")
     {
         DeepLink += "mailboxid=" + Mailboxid;
     }
     else
     {
         BtnText = "Ingen Mailbox configuration fundet!";
     }
     if(SubjectId != undefined && SubjectId != "")
     {
         DeepLink += "subjectid=" + SubjectId;
     }
          
     //Generate the markup/html
     var writer = new CKEDITOR.htmlWriter();
        writer.openTag( 'a' );
        writer.attribute( 'class', 'btn-info' );
        writer.attribute( 'href', DeepLink );
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