import { css } from "~/theme";
import { includeBreakpoint } from "~/theme/mixins";

const notification = css`
  .reapop {
    &__container {
      left: ${({ theme }) => theme.rem(20)};
      position: fixed;
      top: ${({ theme }) => theme.rem(20)};
      z-index: 2003;

      ${includeBreakpoint.mobile`
        right: ${({ theme }) => theme.rem(20)};
      `}
    }

    &__notification {
      align-items: center;
      border-radius: ${({ theme }) => theme.rem(2)};
      box-shadow: 0 ${({ theme }) => theme.rem(3)}
        ${({ theme }) => theme.rem(6)} 0 rgba(0, 0, 0, 0.16);
      display: flex;
      justify-content: space-between;
      margin-bottom: ${({ theme }) => theme.rem(20)};
      padding: ${({ theme }) =>
        `${theme.rem(20)} ${theme.rem(30)} ${theme.rem(20)} ${theme.rem(10)}`};
      width: ${({ theme }) => theme.rem(460)};

      ${includeBreakpoint.mobile`
        flex-direction: column;
        width: 100%;
      `}

      &--success {
        background-color: white;
      }

      &--error {
        background-color: red;
      }

      &-image {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left center;
        display: block;
        height: 100%;
        width: 100%;

        &-container {
          height: ${({ theme }) => theme.rem(50)};
          margin-right: ${({ theme }) => theme.rem(10)};
          width: ${({ theme }) => theme.rem(90)};
        }
      }

      &-title {
        color: ${({ theme }) => theme.colors.orange};
        font-size: ${({ theme }) => theme.rem(18)};
        text-shadow: 0 0 ${({ theme }) => theme.rem(1)} rgba(0, 0, 0, 0.16);

        ${includeBreakpoint.mobile`
          margin-bottom: ${({ theme }) => theme.rem(15)};
          text-align: center;
        `}

        &:first-letter {
          text-transform: uppercase;
        }
      }

      &--error &-title {
        color: white;
      }

      &-meta {
        flex-grow: 1;
      }

      &-dismiss-icon {
        display: none;
        color: ${({ theme }) => theme.colors.orange};
        height: ${({ theme }) => theme.rem(15)};
        margin-right: ${({ theme }) => theme.rem(15)};
        width: ${({ theme }) => theme.rem(15)};

        ${includeBreakpoint.mobile`
          height: ${({ theme }) => theme.rem(25)};
          margin-right: 0;
          width: ${({ theme }) => theme.rem(25)};
        `}

        &:last-of-type {
          display: block;
          cursor: pointer;
          margin-right: 0;
        }
      }

      &--error &-dismiss-icon {
        color: white;
      }
    }
  }
`;

export { notification };
