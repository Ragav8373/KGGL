import React, { useEffect, useRef } from 'react';
import './NewFeatureserp.css';

function NewFeatureserp() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollStep = 1; // pixels per tick
    const scrollDelay = 20; // milliseconds

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollStep;
        // Reset scroll to start when it reaches the end
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    let interval = setInterval(autoScroll, scrollDelay);

    // Pause when mouse enters, resume when leaves
    scrollContainer.addEventListener('mouseenter', () =>
      clearInterval(interval)
    );
    scrollContainer.addEventListener('mouseleave', () => {
      interval = setInterval(autoScroll, scrollDelay);
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container-fluid'>
      <h1 className='text-center erpheading1 py-2'>Key Features</h1>
      <div className='featurespart'>
        <div className='features-scroll-container' ref={scrollRef}>
          <div className='features-scroll-wrapper'>
            <div className='feature-item'>
              <div className='card d-flex flex-column justify-content-center align-items-center p-3 billscard'>
                <h4>Bill of Materials (BOM)</h4>
                <p className='revolutiontxt'>
                  Manage materials, operations, costs, and real-time production tracking.
                </p>
              </div>
            </div>

            <div className='feature-item'>
              <div className='card d-flex flex-column justify-content-center align-items-center p-3 helpcard'>
                <h4>Helpdesk & Support</h4>
                <p className='revolutiontxt'>
                  Manage support tickets, emails, and create a self-service portal.
                </p>
              </div>
            </div>

            <div className='feature-item'>
              <div className='card d-flex flex-column justify-content-center align-items-center p-3 invoicecard'>
                <h4>Billing & Invoicing</h4>
                <p className='revolutiontxt'>
                  Monitor receivables, profitability, and real-time product performance.
                </p>
              </div>
            </div>

            <div className='feature-item'>
              <div className='card d-flex flex-column justify-content-center align-items-center p-3 billscard'>
                <h4>CRM & Sales</h4>
                <p className='revolutiontxt'>
                  Track leads, quotes, and orders while automating alerts and processes for efficient deal closure.
                </p>
              </div>
            </div>

            <div className='feature-item'>
              <div className='card d-flex flex-column justify-content-center align-items-center p-3 hrcard'>
                <h4>HR & Payroll</h4>
                <p className='revolutiontxt'>
                  Simplify leave, expenses, payroll, recruitment, and appraisals with accounting integration.
                </p>
              </div>
            </div>

            <div className='feature-item'>
              <div className='card d-flex flex-column justify-content-center align-items-center p-3 multistorecard'>
                <h4>Sales & Purchase</h4>
                <p className='revolutiontxt'>
                  Track leads, quotations, and purchases while automating inventory and accounting updates.
                </p>
              </div>
            </div>

            <div className='feature-item'>
              <div className='card d-flex flex-column justify-content-center align-items-center p-3 helpcard'>
                <h4>Production Orders</h4>
                <p className='revolutiontxt'>
                  Monitor production, material movements, and timesheets with seamless BOM and inventory integration.
                </p>
              </div>
            </div>

            <div className='feature-item'>
              <div className='card d-flex flex-column justify-content-center align-items-center p-3 multistorecard'>
                <h4>Multi-Store Management</h4>
                <p className='revolutiontxt'>
                  Centrally manage operations, reports, and communication across branches.
                </p>
              </div>
            </div>

            <div className='feature-item'>
              <div className='card d-flex flex-column justify-content-center align-items-center p-3 poscard'>
                <h4>Point of Sale (POS)</h4>
                <p className='revolutiontxt'>
                  Offline-ready POS linked to billing, inventory, and payments.
                </p>
              </div>
            </div>

            <div className='feature-item'>
              <div className='card d-flex flex-column justify-content-center align-items-center p-3 projectcard'>
                <h4>Projects & Timesheets</h4>
                <p className='revolutiontxt'>
                  Link tasks, budgets, and payroll for complete project and billing insights.
                </p>
              </div>
            </div>

            <div className='feature-item'>
              <div className='card d-flex flex-column justify-content-center align-items-center p-3 hrcard'>
                <h4>Inventory Management</h4>
                <p className='revolutiontxt'>
                  Handle warehouses, stock levels, batches, and automate procurement for optimal inventory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewFeatureserp;
