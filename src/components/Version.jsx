import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

const Version = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);




  return (
    <>
      <Button color="primary ml-1 mb-1" onClick={toggle} >
        Historique & note de versions:
      </Button>
      <Collapse isOpen={isOpen}>
        <Card className="bg-secondary text-light">
          <CardBody >
            <ul>
              <li className="text-small  ">
                V 3.3 Mise en place de webhook pour integration continue lors des mise a jour de donnée strapie
              </li>
              <li className="text-small  ">
                V 3.2 integration du backend Strapi en mode prod et dev -variable environnement
              </li>
              <li className="text-small  ">
                V 3.1 integration du backend Strapi
              </li>
              <li className="text-small  ">
                V 3.0 integration dans gatsby - generation de site statique
              </li>
              <li className="text-small  ">
                V 2.1 integration du parametrage (saut de section impression, depublication des composants)
              </li>
              <li className="text-small  ">
                V 2.0 en REACT JS / bootstrap / styledComponent / aos ...
              </li>
              <li className="text-small ">
                {" "}
                V 1.0 est en html / bootstrap / js{" "}
              </li>
            </ul>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
};

export default Version;
