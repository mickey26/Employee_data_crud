import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

import "./App.css";

class Employee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: [],
    };
  }
  componentDidMount() {
    this.fetchEmpData();
  }

  fetchEmpData() {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          this.setState({
            employee: response.data.data,
          });
        }
      });
  }

  render() {
    return (
      <div>
        <div className="first_container">
          {this.state.employee.map((employee, index) => (
            <Card className="card" key={index}>
              {/* <Card.Img
                variant="top"
                src={employee.profile_image}
                height={180}
                width={130}
              /> */}
              <Card.Body>
                <Card.Text className="card_text">
                  Employee Name: {employee.employee_name}
                  <br />
                  Salary: {employee.employee_salary}
                  <br />
                  Age: {employee.employee_age}
                </Card.Text>
                <button onClick>Remove Employee</button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default Employee;
