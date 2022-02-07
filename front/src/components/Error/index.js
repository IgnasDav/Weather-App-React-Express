import { Wrapper, Content } from "./Error.styles";

const Error = () => (
  <Wrapper>
    <Content>
      <div class="patterns">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="polka-dots"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)">
            {" "}
          </rect>

          <text x="50%" y="60%" text-anchor="middle">
            Not Found
          </text>
        </svg>
      </div>
    </Content>
  </Wrapper>
);
export default Error;
