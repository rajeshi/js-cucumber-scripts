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
    |records|
    | VALID_TIN_RECORD |
    | VALID_BRONZE_RECORD|
    | VALID_GOLD_RECORD |
    # And there is an EventAlgo mapping as follows:
    # |[db.getIdentity(Tin)]|

  @acceptance @valid_event_received @for_testing
  Scenario: Valid event received 
  When a valid new event is received
  Then save the event
  And update Identity
