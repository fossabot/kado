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
 * Exporting the model
 * @param {object} sequelize
 * @param {object} DataTypes
 * @return {object}
 */
module.exports = function(sequelize,DataTypes) {
  return sequelize.define('StaffSession',{
      sid: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      expires: {
        type: DataTypes.DATE
      },
      data: {
        type: DataTypes.TEXT
      }
    },
    {
      indexes: [
        {
          name: 'expires_index',
          method: 'BTREE',
          fields: ['expires']
        },
        {
          name: 'createdAt_index',
          method: 'BTREE',
          fields: ['createdAt']
        },
        {
          name: 'updatedAt_index',
          method: 'BTREE',
          fields: ['updatedAt']
        }
      ]
    })
}
