import { gql } from "@apollo/client";

import { PLAYER_FIELDS_WITH_FRIENDS } from "./fragments";

export const CREATE_PLAYER = gql`
  ${PLAYER_FIELDS_WITH_FRIENDS}

  mutation createPlayer($input: CreatePlayerInput!) {
    createPlayer(input: $input) {
      ...PlayerFieldsWithFriends
    }
  }
`;

export const UPDATE_PLAYER = gql`
  ${PLAYER_FIELDS_WITH_FRIENDS}

  mutation updatePlayer($input: UpdatePlayerInput!) {
    updatePlayer(input: $input) {
      ...PlayerFieldsWithFriends
    }
  }
`;
