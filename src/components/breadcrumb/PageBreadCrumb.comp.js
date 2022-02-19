import React from 'react';
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

export const PageBreadCrumb = ({ page }) => {
  return (
    <Breadcrumb>
      <LinkContainer to="/" exact>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
      </LinkContainer>
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  )
}