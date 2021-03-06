'use strict';
/**
 * Kado - Module system for Enterprise Grade applications.
 * Copyright © 2015-2019 NULLIVEX LLC. All rights reserved.
 * Kado <support@kado.org>
 *
 * This file is part of Kado.
 *
 * Kado is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Kado is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Kado.  If not, see <https://www.gnu.org/licenses/>.
 */


/**
 * Set var to window
 * @param {string} name
 * @param {*} val
 */
let toWindow = (name,val) => {
  window[name] = val
}

//headless dependencies
require('bootstrap')
require('bootstrap-select')
toWindow('Holder',require('holderjs'))
require('jquery-ui')
toWindow('moment',require('moment'))

//global dependencies
toWindow('base64js',require('base64-js'))
toWindow('b64',require('base64-js'))
toWindow('prettyBytes',require('pretty-bytes'))
toWindow('querystring',require('qs'))

//datatables)
toWindow('pdfmake',require('pdfmake/build/pdfmake.min.js'));
require('datatables.net-bs4')(window,$);
require('datatables.net-buttons/js/dataTables.buttons.js')(window,$);
require('datatables.net-buttons-bs4')(window,$);
require('datatables.net-buttons/js/buttons.colVis.js')(window,$);
require('datatables.net-buttons/js/buttons.flash.js')(window,$);
require('datatables.net-buttons/js/buttons.html5.js')(window,$);
require('datatables.net-buttons/js/buttons.print.js')(window,$);
require('datatables.net-colreorder-bs4')(window,$);
require('datatables.net-fixedcolumns-bs4')(window,$);
require('datatables.net-fixedheader-bs4')(window,$);
require('datatables.net-keytable')(window,$);
require('datatables.net-responsive-bs4')(window,$);
require('datatables.net-rowreorder-bs4')(window,$);
require('datatables.net-select-bs4')(window,$);

//tui-editor
require('markdown-it');
require('to-mark/dist/to-mark');
require('codemirror/lib/codemirror.js');
require('highlight.js/lib/highlight.js');
require('squire-rte/build/squire-raw.js');
require('tui-code-snippet/dist/tui-code-snippet');
toWindow('TuiViewer',require('tui-editor/dist/tui-editor-Viewer.js'));

//userspace
require('../../../helpers/js/table')
require('../../../helpers/js/util')
