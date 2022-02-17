import React from 'react';
import { Breadcrumb } from "react-bootstrap";

export const PageBreadCrumb = ({ page }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item to="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  )
}