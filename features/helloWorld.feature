@dialogs @receive_message
Feature: Receive message
  All valid messages
  should be captured in their raw form
  persisted 
  and then denorm'd to all related services

  Why:
  - we can run sentiment models on user's text to evaluate their state of mind
  - in the future, we will likely get in the intent business ourselves.  having the raw data will be useful.
  - in any consumer analytics environment, hold on to ALL the data you can, for as LONG as you can.

  Rules:
  - the inbound message must containt a bot key (which kong decodes to org and botId) as well as p/pId

    Background:
        Given there are Identity records as follows:
            |record-key|
            |A_RANDOM_TIN_RECORD|
            |A_RANDOM_BRONZE_RECORD|
            |A_RANDOM_SILVER_RECORD|
            |A_RANDOM_GOLD_RECORD|
          And Session records as follows:
            | sessionId | identityId | botId | stateDate        | lastDate         | 
            | 44        | 1          | A1    | 12/1/2016 5:00PM | 12/3/2016 2:00PM |
          And Dialog records as follows:
            | sessionId | identityId | botId | platform | platformId | {identity}    | [{terms}]                 | messages |
            | 44        | 1          | A1    | FB       | 1234       | {Bill Bob...} | [{Order, 50}, {Pizza, 75} | 5        |

    @acceptance @valid_message_received @existing_session @developing
    Scenario: Received valid message for existing identity and session 
        Given the new message is received within the time frame for the current session
        When a valid new message is received
         And identity returns the current session
        Then save the message
         And update the dialog counts and terms
         And update the identity counts
         And create a summarized event 
