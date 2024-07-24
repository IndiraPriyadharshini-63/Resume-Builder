import React, { Component, createRef } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { toast } from "react-toastify";
import "./CreateResume.css";
import Footer from "./Footer";
import { ErrorToast, SuccessToast } from "./Toast";

// function CreateResume() {
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [designation, setDesignation] = useState();
//   const [phone, setPhone] = useState();
//   const [skills, setSkills] = useState();
//   const [address, setAddress] = useState();
//   const [techStack, setTechStack] = useState([
//     "JavaScript",
//     "React",
//     "Python",
//     "Node",
//     "Django",
//     "CSS",
//   ]);

//   const refName = createRef();
//   const refEmail = createRef();
//   const refPhone = createRef();
//   const refDesignation = createRef();
//   const refAddress = createRef();
//   const refCompany = createRef();
//   const refExpDesignation = createRef();
//   const refRole = createRef();
//   const refInstitution = createRef();
//   const refDegree = createRef();
//   const refYOP = createRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let name = refName.current.value;
//     let email = refEmail.current.value;
//     let phone = refPhone.current.value;
//     let designation = refDesignation.current.value;
//     let address = refAddress.current.value;
//     if (name === "" || name === null) {
//       toast.error(<ErrorToast message="Please Enter Name" />);
//     } else if (email === "" || email === null) {
//       toast.error(<ErrorToast message="Please Enter Email" />);
//     } else if (phone === "" || phone === null) {
//       toast.error(<ErrorToast message="Please Enter Phone" />);
//     } else if (designation === "" || designation === null) {
//       toast.error(<ErrorToast message="Please Enter Designation" />);
//     } else if (address === "" || address === null) {
//       toast.error(<ErrorToast message="Please Enter Address" />);
//     } else{

//       setName(...name, refName.current.name)
//       toast.success(<SuccessToast message="Saved successfully" />)
//     }

//   };
//   return (
//     <>
//       <div className="container form-container">
//         <Form>
//           <Form.Group as={Col} controlId="formGridName">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               name="name"
//               defaultValue="Indira"
//               onChange={(e) => setName(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group as={Col} controlId="formGridEmail">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               name="email"
//               defaultValue="Indira@123"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group as={Col} controlId="formGridDesignation">
//             <Form.Label>Designation</Form.Label>
//             <Form.Control
//               type="text"
//               name="designation"
//               defaultValue="Associate Software Engineer"
//               onChange={(e) => setDesignation(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group as={Col} controlId="formGridPhone">
//             <Form.Label>Phone</Form.Label>
//             <Form.Control
//               type="number"
//               name="phone"
//               defaultValue="9660600673"
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group controlId="formGridAddress">
//             <Form.Label>Address</Form.Label>
//             <Form.Control
//               as="textarea"
//               name="address"
//               defaultValue="Lorem ipsumfgf"
//               onChange={(e) => setAddress(e.target.value)}
//             />
//           </Form.Group>

//           <h5 className="mb-4">Experience</h5>
//           {/* experience field render here */}

//           <Form.Group controlId="formGridSkills" className="my-3">
//             <Form.Label>Skills</Form.Label>
//             <Typeahead
//               multiple
//               className="mt-1"
//               id="skillID"
//               placeholder="Select your skill"
//               options={techStack}
//             />
//           </Form.Group>
//           <h5 className="mb-4 mt-3">Education</h5>
//           <div className="d-flex justify-content-center">
//             <Button
//               size="md"
//               className="upgrad-btn text-light"
//               onClick={handleSubmit}
//             >
//               Submit
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </>
//   );
// }

// export default CreateResume;

export default class CreateResume extends Component {
  constructor() {
    super();
    this.state = {
      form_data: {
        name: "",
        email: "",
        designation: "",
        phone: "",
        address: "",
        skills: [],
      },
      experience: [
        {
          company: "",
          designation: "",
          period: "",
          role: "",
        },
      ],
      education: [
        {
          institution: "",
          degree: "",
          yop: "",
        },
      ],
    };
    this.numberOfExpFields = 0;
    this.numberOfEduFields = 0;
    this.techStacks = [
      "JavaScript",
      "React",
      "Python",
      "Node",
      "Django",
      "CSS",
    ];
    this.refName = createRef();
    this.refEmail = createRef();
    this.refPhone = createRef();
    this.refDesignation = createRef();
    this.refAddress = createRef();
    this.refCompany = createRef();
    this.refExpDesignation = createRef();
    this.refRole = createRef();
    this.refInstitution = createRef();
    this.refDegree = createRef();
    this.refYOP = createRef();
  }

  handleChange = () => {
    let name = this.refName.current.value;
    let email = this.refEmail.current.value;
    let phone = this.refPhone.current.value;
    let designation = this.refDesignation.current.value;
    let address = this.refAddress.current.value;
    if (name === "" || name === null) {
      toast.error(<ErrorToast message="Please Enter Name" />);
    } else if (email === "" || email === null) {
      toast.error(<ErrorToast message="Please Enter Email" />);
    } else if (phone === "" || phone === null) {
      toast.error(<ErrorToast message="Please Enter Phone" />);
    } else if (designation === "" || designation === null) {
      toast.error(<ErrorToast message="Please Enter Designation" />);
    } else if (address === "" || address === null) {
      toast.error(<ErrorToast message="Please Enter Address" />);
    } else {
      this.setState({
        form_data: {
          ...this.state.form_data,
          [this.refName.current.name]: name,
          [this.refEmail.current.name]: email,
          [this.refPhone.current.name]: phone,
          [this.refDesignation.current.name]: designation,
          [this.refAddress.current.name]: address,
        },
      });
      toast.success(<SuccessToast message="Saved Successfully" />);
    }
  };

  generateExpField = (counter) => {
    let index = counter;
    if (this.state.experience[index]) {
      return (
        <div key={index}>
          {/* <Form.Row> */}
            <Form.Group as={Col} controlId="formGridCompany">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                ref={this.refCompany}
                name="company"
                defaultValue={this.state.experience[index].company}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGrid">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                ref={this.refExpDesignation}
                name="designation"
                defaultValue={this.state.experience[index].designation}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridRole">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                ref={this.refRole}
                name="role"
                defaultValue={this.state.experience[index].role}
              />
            </Form.Group>
          {/* </Form.Row> */}
          <Button variant="light" size="sm" onClick={this.handleAddExp}>
            {" "}
            ➕{" "} 
          </Button>
          {this.numberOfExpFields >= 1 && (
            <Button
              variant="light"
              size="sm"
              onClick={() => this.handleRemoveExp(index)}
              className="ml-2"
            >
              {" "}
              ❌{" "}
            </Button>
          )}
        </div>
      );
    }
  };

  handleAddExp = () => {
    this.numberOfExpFields++;
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        [this.numberOfExpFields]: {
          company: "",
          designation: "",
          period: "",
          role: "",
        },
      },
    }));
  };

  handleRemoveExp = (index) => {
    this.numberOfExpFields--;
    let elem = this.state.experience;
    if (Object.keys(elem).length >= 0) {
      delete elem[index];
      this.setState({
        experience: {
          ...elem,
        },
      });
    }
  };

  renderExperienceField = () => {
    let counter = 0;
    let sectioncontainer = [];
    while (counter <= this.numberOfExpFields) {
      let oneField = this.generateExpField(counter);
      sectioncontainer.push(oneField);
      counter++;
    }
    return sectioncontainer;
  };

  generateEduField = (counter) => {
    let index = counter;
    if (this.state.education[index]) {
      return (
        <div key={index}>
          {/* <Form.Row> */}
            <Form.Group as={Col} controlId="formGridInstitution">
              <Form.Label>Institution</Form.Label>
              <Form.Control
                type="text"
                ref={this.refInstitution}
                name="institution"
                defaultValue={this.state.education[index].institution}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGrid">
              <Form.Label>Degree</Form.Label>
              <Form.Control
                type="text"
                ref={this.refDegree}
                name="degree"
                defaultValue={this.state.education[index].degree}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridYOP">
              <Form.Label>Year of Passing</Form.Label>
              <Form.Control
                type="text"
                ref={this.refYOP}
                name="yop"
                defaultValue={this.state.education[index].yop}
              />
            </Form.Group>
          {/* </Form.Row> */}
          <Button variant="light" size="sm" onClick={this.handleAddEdu}>
            {" "}
            ➕{" "}
          </Button>
          {this.numberOfEduFields >= 1 && (
            <Button
              variant="light"
              size="sm"
              onClick={() => this.handleRemoveEdu(index)}
              className="ml-2"
            >
              {" "}
              ❌{" "}
            </Button>
          )}
        </div>
      );
    }
  };
  handleAddEdu = () => {
    this.numberOfEduFields++;
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        [this.numberOfEduFields]: { institution: "", degree: "", yop: "" },
      },
    }));
  };

  handleRemoveEdu = (index) => {
    this.numberOfEduFields--;
    let elem = this.state.education;
    if (Object.keys(elem).length >= 0) {
      delete elem[index];
      this.setState({
        education: {
          ...elem,
        },
      });
    }
  };

  renderEducationField = () => {
    let counter = 0;
    let sectioncontainer = [];
    while (counter <= this.numberOfEduFields) {
      let oneField = this.generateEduField(counter);
      sectioncontainer.push(oneField);
      counter++;
    }
    return sectioncontainer;
  };

  render() {
    return (
      <>
        <div className="container form-container">
          <Form>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                ref={this.refName}
                name="name"
                defaultValue={this.state.form_data.name}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={this.refEmail}
                name="email"
                defaultValue={this.state.form_data.email}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDesignation">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                ref={this.refDesignation}
                name="designation"
                defaultValue={this.state.form_data.designation}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                ref={this.refPhone}
                name="phone"
                defaultValue={this.state.form_data.phone}
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                ref={this.refAddress}
                name="address"
                defaultValue={this.state.form_data.address}
              />
            </Form.Group>

            <h5 className="mb-4">Experience</h5>
            {this.renderExperienceField()}

            <Form.Group controlId="formGridSkills" className="my-3">
              <Form.Label>Skills</Form.Label>
              <Typeahead
                multiple
                className="mt-1"
                id="skillID"
                onChange={(selected) => {
                  this.setState({
                    form_data: {
                      ...this.state.form_data,
                      skills: selected,
                    },
                  });
                }}
                placeholder="Select your skill"
                defaultSelected={this.techStacks.slice(0, 2)}
                options={this.techStacks}
              />
            </Form.Group>

            <h5 className="mb-4 mt-3">Education</h5>
            {this.renderEducationField()}

            <div className="d-flex justify-content-center">
              <Button
                onClick={this.handleChange}
                size="md"
                variant=""
                className="upgrad-btn text-light"
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
        <Footer />
      </>
    );
  }
}
