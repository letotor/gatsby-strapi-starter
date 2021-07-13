
      <CardWrapper className="justify-content-sm-start">
        {state.isVisible && (
          <>
            <div className="d-flex justify-content-between m-2">
              <Badge
                className="pull-right m-2"
                color="success"
                // backgroundColor="purple"
              >
                {year}
              </Badge>
              <Badge
                className="pull-right m-2"
                color="primary"
                // backgroundColor="purple"
              >
                {type}
              </Badge>
            </div>
            <CardIcon>
              {srcLogo && (
                <img
                  src={srcLogo}
                  alt=""
                  srcSet={srcLogo}
                  width="100%"
                  height="200px"
                  object-fit="contain"
                />
              )}
            </CardIcon>
            <CardHeader className="text-center m-1">{title}</CardHeader>
            <CardBody className="text-center m-1">{where}</CardBody>
          </>
        )}
      </CardWrapper>