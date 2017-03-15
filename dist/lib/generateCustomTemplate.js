'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const generateCustomTemplate = templateOptions => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html
  ${templateOptions.lang ? 'lang="' + templateOptions.lang + '"' : ''}
  dir="${templateOptions.dir}"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width"/>

    <title>${templateOptions.title}</title>

    <style type="text/css">
      ${templateOptions.headCSS}

      #__bodyTable__ {
        margin: 0;
        padding: 0;
        width: 100% !important;
      }
    </style>

    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
  </head>
  <body bgcolor="#f7f6f5" width="100%" style="-webkit-font-smoothing: antialiased; width:100% !important; background:#f7f6f5;-webkit-text-size-adjust:none; margin:0; padding:0; min-width:100%; direction: ${templateOptions.dir};">
    <table cellpadding="0" cellspacing="0" bgcolor="#f7f6f5" id="__bodyTable__" width="100%" style="-webkit-font-smoothing: antialiased; width:100% !important; background:#FFFFFF;-webkit-text-size-adjust:none; margin:0; padding:0; min-width:100%">
      <tr>
        <td align="center">
          <span style="display: none !important; color: #FFFFFF; margin:0; padding:0; font-size:1px; line-height:1px;">${templateOptions.previewText}</span>
          ${templateOptions.bodyContent}
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

exports.default = generateCustomTemplate;