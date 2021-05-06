import React from 'react'
// import CIcon from '@coreui/icons-react'

const _nav =  [
  {
      _tag: 'CSidebarNavDropdown',
      name: 'Component',
      route: '/base',
      icon: 'cil-puzzle',
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Tables',
          to: '/base/tables',
        }
      ]
  }
]

export default _nav
