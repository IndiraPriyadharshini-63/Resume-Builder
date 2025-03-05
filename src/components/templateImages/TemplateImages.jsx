import { useState } from "react";
import "./templateImages.css";
import { connect } from "react-redux";
import { SELECTTEMPLATE } from "../../Redux/Actions";
import { useNavigate } from "react-router-dom";
import { templates } from "../../Data/Templates";

const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedTemplateId: (id) => dispatch(SELECTTEMPLATE(id)),
});
function TemplateImages(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % templates.length);
  };
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + templates.length) % templates.length
    );
  };

  if (currentIndex > templates.length - 3) {
    setCurrentIndex(0);
  }

  const navigateToFill = (id) => {
    props.setSelectedTemplateId(id);
    navigate("/template/FillDetails");
  };
  return (
    <div className="carousalWrapper">
      <h2 className="templatesHeading">Resume Templates</h2>
      <div>
        <div className="templateList">
          {templates.slice(currentIndex, currentIndex + 3).map((t) => (
            <div key={t.id} className="templateListItem">
              <img
                loading="lazy"
                src={t.template_img}
                alt={t.template_name}
                className="templateImg"
                onClick={() => navigateToFill(t.id)}
              />
            </div>
          ))}
        </div>
        <div className="btnGroup">
          <button onClick={prevImage} className="Btn">
            &lt;
          </button>
          <button onClick={nextImage} className="Btn">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateImages);
