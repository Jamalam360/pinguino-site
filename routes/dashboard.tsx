/** @jsx h */
import { h } from "../client_deps.ts";
import Head from "../components/head.tsx";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

import DashboardIsland from "../islands/dashboard.tsx";

export default function Dashboard() {
  return (
    <div class="margin-60px-auto max-width-800px">
      <Head />
      <Header />
      <DashboardIsland />
      <Footer />
    </div>
  );
}