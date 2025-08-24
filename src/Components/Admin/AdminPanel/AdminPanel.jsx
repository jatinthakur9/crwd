import React, { useEffect } from "react";
import AdminPanelHeader from "./AdminPanelHeader/AdminPanelHeader";
import AdminPanelFooter from "./AdminPanelFooter/AdminPanelFooter";
import AdminPanelHome from "./AdminPanelHome/AdminPanelHome";
import AdminPanelSideNav from "./AdminPanelSideNav/AdminPanelSideNav";

const AdminPanel = () => {
  useEffect(() => {
    const cssLinks = [
      "/plugins/fontawesome-free/css/all.min.css",
      "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css",
      "/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css",
      "/plugins/icheck-bootstrap/icheck-bootstrap.min.css",
      "/plugins/jqvmap/jqvmap.min.css",
      "/dist/css/adminlte.min.css",
      "/plugins/overlayScrollbars/css/OverlayScrollbars.min.css",
      "/plugins/daterangepicker/daterangepicker.css",
      "/plugins/summernote/summernote-bs4.min.css",
    ];

    const linkElements = cssLinks.map((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
      return link;
    });

    return () => {
      linkElements.forEach((link) => document.head.removeChild(link));
    };
  }, []);

  return (
    <div className="wrapper">
      <AdminPanelHeader />
      <AdminPanelSideNav />
      {/* <AdminPanelHome /> */}
      {/* <AdminPanelFooter /> */}
    </div>
  );
};

export default AdminPanel;
