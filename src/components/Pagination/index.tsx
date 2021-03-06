import React, { FC } from 'react'
import range from 'ramda/src/range'
import map from 'ramda/src/map'
import Link from 'next/link'
import * as routes from '../../routes'

import { SizeSelect } from './SizeSelect'
import { List, ListItem } from './styled'

const renderPaginationItem = (size: number) => (number: number) => (
  <ListItem key={number}>
    <Link href={`${routes.PRODUCT_LIST}?page=${number}&size=${size}`}>
      <a>{number}</a>
    </Link>
  </ListItem>
)

type Props = {
  pages: number
  size: number
  onSizeChange: (size: number) => void
}

const Pagination: FC<Props> = ({ pages, size, onSizeChange }) => (
  <>
    <List>{map(renderPaginationItem(size), range(1, pages + 1))}</List>
    <SizeSelect onChange={onSizeChange} value={size} />
  </>
)

export { Pagination }
