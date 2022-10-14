import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Card from "../../components/Card";
import DevelopingLabel from "../../components/DevelopingLabel";
import SchoolLayout from "../../components/layouts.tsx/SchoolLayout";

function SchoolYES() {
  return (
    <>
      <title>
        My Stories from Yeouido Elementary School (목운중) | About Seihyun Lee
      </title>

      <SchoolLayout>
        <h1>Yeouido Elementary School (여의도초)</h1>
        <h3>2013 - 2018</h3>

        <DevelopingLabel />
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <StaticImage
              src="../../assets/YES/20171112_224402.jpeg"
              alt="made a lego Saturn V"
              style={{
                borderRadius: 20,
                margin: 10,
              }}
            />
            <StaticImage
              src="../../assets/YES/20180911_143835.jpeg"
              alt="from a park"
              style={{
                borderRadius: 20,
                margin: 10,
              }}
            />
          </div>
        </Card>
      </SchoolLayout>
    </>
  );
}

export default SchoolYES;
