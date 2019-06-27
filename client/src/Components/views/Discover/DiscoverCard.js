import React from "react";
import styled from "styled-components";
import { slate_grey } from "../../~reusables/variables/colors";
import { body_2, body_1 } from "../../~reusables/variables/font-sizes";
import ProfileImage from "../../~reusables/components/ProfileImage";

const Wrap = styled.div`
  /* Rectangle */

  margin: 0 auto;
  /* width: 1260px; */
  /* height: 680px; */

  /* White */
  background: #ffffff;
`;
const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const Card = styled.div`
  /* Background */
  ${props => (props.display === "on" ? `display: block;` : `display: none;`)}
  position: relative;
  width: 350px;
  height: 560px;
  margin: 0 auto;
  /* White */
  background: #ffffff;
  /* Faded Black */
  border: 1px solid ${slate_grey};
  box-sizing: border-box;
  border-radius: 8px;
  text-align: center;
  line-height: 20px;
  font-size: ${body_2};
`;

const SubHeader = styled.div`
  font-size: ${body_1};
  color: ${slate_grey};
`;

const DetailSection = styled.div`
  border-top: 1px solid ${slate_grey};
  margin: 0 auto;
  text-align: center;
  line-height: 1.5rem;
  font-size: ${body_2};
`;

const DiscoverCard = ({ data, display }) => {
  const infoHeader = data.education ? "Education" : "Requirements";
  const infoHeader2 = data.experience ? "Experience" : "Description";
  return (
    <Wrap>
      <Card display={display}>
        <ImageWrap>
          <ProfileImage
            name={data.name}
            image="https://randomuser.me/api/portraits/men/86.jpg"
          />
        </ImageWrap>

        <SubHeader>{data.name}</SubHeader>
        <p>{data.email}</p>
        <p>{data.location}</p>

        <DetailSection>
          <SubHeader>Biography</SubHeader>
          <p>{data.bio}</p>
        </DetailSection>

        <DetailSection>
          <SubHeader>{infoHeader2}</SubHeader>
          <div>
            {data.description.map((info, index) => {
              return <p key={index}>{info}</p>;
            })}
          </div>
        </DetailSection>
        <DetailSection>
          <SubHeader>{infoHeader}</SubHeader>
          <div>
            {data.requirements.map((info, index) => {
              return <p key={index}>{info}</p>;
            })}
          </div>
        </DetailSection>
      </Card>
    </Wrap>
  );
};

export default DiscoverCard;
