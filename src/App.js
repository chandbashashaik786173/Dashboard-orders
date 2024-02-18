import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Pagination from "react-bootstrap/Pagination";
import { FaAngleDoubleDown } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Badge, NavDropdown } from "react-bootstrap";
import "./App.css";

function App() {
  const [profilePic] = useState("images/profilenav.jpg");
  const [orders] = useState(() => {
    const initialOrders = [];
    for (let i = 0; i < 11; i++) {
      initialOrders.push({
        id: 1077620 + i,
        shpiify: "17713",
        date: "22 Jan 2020",
        status: "Pending",
        customer: `Shaikchandbasha `,
        email: `chand123@example.com`,
        country: "Australia",
        shipping: "Australian Post Api",
        source: `Shopify AU `,
        type: " Customer",
      });
    }
    return initialOrders;
  });

  return (
    <div className="App vh-100">
      <Navbar className="navbar">
        <Container fluid>
          <Navbar.Brand href="#home">Dashboard &gt; orders</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#deets">
                <div
                  className="bellicon"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    marginTop: "10px",
                    marginRight: "20px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-bell m-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                  </svg>
                  <Badge
                    className="bell-badge"
                    bg="danger"
                    style={{
                      position: "absolute",
                      right: "-6px",
                      borderRadius: "50%",
                    }}
                  >
                    10+
                  </Badge>
                </div>
              </Nav.Link>
              <Nav.Link>
                <img
                  className="nav-image"
                  src={profilePic}
                  alt="Profile"
                  width="60px"
                  height="60px"
                  style={{ borderRadius: "50%", marginRight: "20px" }}
                />
              </Nav.Link>
            </Nav>
            <NavDropdown
              title="shaikchandbasha"
              style={{ marginRight: "80px" }}
            >
              <NavDropdown.Item>Action 1</NavDropdown.Item>
              <NavDropdown.Item>Action 2</NavDropdown.Item>
              <NavDropdown.Item>Action 3</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="d-flex bg-light justify-content-between  container-1 align-items-center">
        <h2>Orders</h2>
        <button type="button" className="button">
          CREATE NEW
        </button>
      </div>
      <div className="container-2  justify-content-between align-items-center ">
        <div className="search-container">
          <label>What are you looking for?</label>

          <br></br>
          <input
            type="text"
            placeholder="       Search for categories, name, company, etc..."
            className="search-input"
          />
          <BiSearch className="search-icon" />
        </div>
        <Container fluid className="d-flex justify-content-around">
          <div>
            <label>Category</label>
            <br></br>
            <select className="select-option">
              <option value="all">All</option>
              <option value="all">ONE</option>
              <option value="all">TWO</option>
            </select>
          </div>
          <div>
            <label>Status</label>
            <br></br>
            <select className="select-option">
              <option value="all">All</option>
              <option value="all">ONE</option>
              <option value="all">TWO</option>
            </select>
          </div>
        </Container>
        <span type="button" className="doubledown ">
          <FaAngleDoubleDown className="mt-2" />
        </span>

        <button type="button">Search</button>
      </div>
      <div className="table-responsive">
        <table className="table ">
          <thead>
            <tr>
              <th colSpan={10}>
                <div className="container-table d-flex justify-content-between">
                  <div className="text-center summary-container">
                    <div>
                      <label className="summarylabel">Product Summary</label>
                      <label className="showlabel">SHOW</label>
                      <select className="select-option-2 ">
                        <option value="all">ALL COLUMNS</option>
                        <option value="all">ALL COLUMNS</option>
                        <option value="all">ALL COLUMNS</option>
                      </select>
                      <button className="mx-2  dispatch-btn">
                        DISPATCHED SELECTED
                      </button>
                    </div>
                    <div className="pagination-div">
                      <Pagination className="pagination-item">
                        <Pagination.Prev />
                        <Pagination.Item className="pagination-item">
                          {1}
                        </Pagination.Item>
                        <Pagination.Item className="pagination-item">
                          {2}
                        </Pagination.Item>
                        <Pagination.Item className="pagination-item" active>
                          {3}
                        </Pagination.Item>
                        <Pagination.Ellipsis className="pagination-item" />
                        <Pagination.Item className="pagination-item" disabled>
                          {8}
                        </Pagination.Item>
                        <Pagination.Next />
                      </Pagination>
                    </div>
                  </div>
                </div>
              </th>
            </tr>
            <tr>
              <th className="d-flex ">
                <input type="checkbox" className="checkbox" />
                <span>ID</span>
              </th>
              <th>SHPIIFY</th>
              <th>DATE</th>
              <th>STATUS</th>
              <th>CUSTOMER</th>
              <th>EMAIL</th>
              <th>COUNTRY</th>
              <th>SHIPPING</th>
              <th>SOURCE</th>
              <th>TYPE</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="align-items-center">
                <td>
                  <input type="checkbox" className="checkbox" />
                  {order.id}
                </td>
                <td>{order.shpiify}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td>{order.customer}</td>
                <td>{order.email}</td>
                <td>{order.country}</td>
                <td>{order.shipping}</td>
                <td>{order.source}</td>
                <td>
                  {order.type}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-box-arrow-in-down-left"
                    viewBox="0 0 16 16"
                    style={{ marginLeft: "25px", marginBottom: "3px" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                    />
                    <path
                      fillRule="evenodd"
                      d="M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0z"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
