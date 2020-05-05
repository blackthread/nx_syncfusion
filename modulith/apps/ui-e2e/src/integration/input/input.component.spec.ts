describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=inputcomponent--primary&knob-label=Label&knob-placeholder=Placeholder&knob-disabled=false'));

  it('should render the component', () => {
    cy.get('modulith-input').should('exist');
  });
});
