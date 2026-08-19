/* ==========================================================================
   SpendPulse — Customer Intelligence Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     0. Light / Dark Theme Toggle Logic
     -------------------------------------------------------------------------- */
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('spendpulse_theme');

  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme === 'light') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('spendpulse_theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('spendpulse_theme', 'light');
      }
    });
  }

  /* --------------------------------------------------------------------------
     1. Customer Persona Classifier Logic
     -------------------------------------------------------------------------- */
  const sliderBalance = document.getElementById('sliderBalance');
  const sliderCashAdvance = document.getElementById('sliderCashAdvance');
  const sliderPurchases = document.getElementById('sliderPurchases');
  const sliderCreditLimit = document.getElementById('sliderCreditLimit');

  const valBalance = document.getElementById('valBalance');
  const valCashAdvance = document.getElementById('valCashAdvance');
  const valPurchases = document.getElementById('valPurchases');
  const valCreditLimit = document.getElementById('valCreditLimit');

  const personaIcon = document.getElementById('personaIcon');
  const personaTitle = document.getElementById('personaTitle');
  const personaSubtitle = document.getElementById('personaSubtitle');
  const personaRisk = document.getElementById('personaRisk');
  const personaProfit = document.getElementById('personaProfit');
  const personaStrategy = document.getElementById('personaStrategy');

  function formatCurrency(val) {
    return (val < 0 ? '-$' : '$') + Math.abs(Math.round(val)).toLocaleString();
  }

  function updatePersonaClassifier() {
    if (!sliderBalance) return;
    const balance = parseFloat(sliderBalance.value);
    const cash = parseFloat(sliderCashAdvance.value);
    const purchases = parseFloat(sliderPurchases.value);
    const limit = parseFloat(sliderCreditLimit.value);

    valBalance.textContent = formatCurrency(balance);
    valCashAdvance.textContent = formatCurrency(cash);
    valPurchases.textContent = formatCurrency(purchases);
    valCreditLimit.textContent = formatCurrency(limit);

    const cashRatio = cash / (purchases + cash + 1);
    const totalActivity = purchases + cash;

    let persona = {
      title: 'Inactive / Low-Activity User',
      icon: '💤',
      subtitle: 'Minimal spending & unutilized credit line. High dormancy potential.',
      risk: 'Low Risk',
      riskClass: 'val-green',
      profit: 'Reactivation',
      strategy: 'Targeted re-engagement offers ($35 statement credit bonus) to test activation potential.'
    };

    if (cashRatio > 0.45 && cash > 1000) {
      persona = {
        title: 'Cash Advance Revolver',
        icon: '⚠️',
        subtitle: 'High frequency cash withdrawals & large revolving balance.',
        risk: 'Elevated Risk',
        riskClass: 'val-orange',
        profit: 'Revenue vs Risk',
        strategy: 'Risk-aware offers, balance-transfer strategies, and tighter credit limit monitoring.'
      };
    } else if (purchases > 1200 || (purchases > cash && totalActivity > 1000)) {
      persona = {
        title: 'Active Transactor',
        icon: '💳',
        subtitle: 'Frequent purchase transactions with low cash advance dependence.',
        risk: 'Low Risk',
        riskClass: 'val-green',
        profit: 'Retention & Loyalty',
        strategy: 'Premium rewards, travel perks, and automated limit increases.'
      };
    }

    if (personaIcon) personaIcon.textContent = persona.icon;
    if (personaTitle) personaTitle.textContent = persona.title;
    if (personaSubtitle) personaSubtitle.textContent = persona.subtitle;
    if (personaRisk) {
      personaRisk.textContent = persona.risk;
      personaRisk.className = 'p-stat-val ' + persona.riskClass;
    }
    if (personaProfit) personaProfit.textContent = persona.profit;
    if (personaStrategy) personaStrategy.textContent = persona.strategy;
  }

  [sliderBalance, sliderCashAdvance, sliderPurchases, sliderCreditLimit].forEach(slider => {
    if (slider) slider.addEventListener('input', updatePersonaClassifier);
  });
  updatePersonaClassifier();


  /* --------------------------------------------------------------------------
     2. Honest ROI Campaign Decision Simulator
     -------------------------------------------------------------------------- */
  const TOTAL_INACTIVE_ACCOUNTS = 6114;

  const roiTargetPct = document.getElementById('roiTargetPct');
  const roiConvRate = document.getElementById('roiConvRate');
  const roiIncentive = document.getElementById('roiIncentive');
  const roiRevPerUser = document.getElementById('roiRevPerUser');

  const valRoiTargetPct = document.getElementById('valRoiTargetPct');
  const valRoiConvRate = document.getElementById('valRoiConvRate');
  const valRoiIncentive = document.getElementById('valRoiIncentive');
  const valRoiRevPerUser = document.getElementById('valRoiRevPerUser');

  const resNetProfit = document.getElementById('resNetProfit');
  const roiStatusBadge = document.getElementById('roiStatusBadge');
  const roiResultCard = document.getElementById('roiResultCard');

  const resActivated = document.getElementById('resActivated');
  const resCost = document.getElementById('resCost');
  const resGross = document.getElementById('resGross');
  const resROI = document.getElementById('resROI');

  const beConvRate = document.getElementById('beConvRate');
  const beRevPerUser = document.getElementById('beRevPerUser');

  function calculateCampaignROI() {
    if (!roiTargetPct) return;
    const targetPct = parseFloat(roiTargetPct.value);
    const convRate = parseFloat(roiConvRate.value);
    const incentive = parseFloat(roiIncentive.value);
    const revPerUser = parseFloat(roiRevPerUser.value);

    const targetedUsers = Math.round(TOTAL_INACTIVE_ACCOUNTS * (targetPct / 100));
    const activatedUsers = Math.round(targetedUsers * (convRate / 100));

    // Outreach cost: $13.26 per targeted user outreach + $35 incentive to converted
    const fixedOutreachCost = targetedUsers * 13.26;
    const totalCost = Math.round(fixedOutreachCost + (activatedUsers * incentive));
    const grossRevenue = Math.round(activatedUsers * revPerUser);
    const netProfit = grossRevenue - totalCost;
    const roiPercentage = totalCost > 0 ? ((netProfit / totalCost) * 100).toFixed(1) : 0;

    // Break-even Calculation
    const netRevPerUser = revPerUser - incentive;
    let requiredConvRate = 0;
    if (netRevPerUser > 0) {
      const requiredUsers = fixedOutreachCost / netRevPerUser;
      requiredConvRate = ((requiredUsers / targetedUsers) * 100).toFixed(1);
    } else {
      requiredConvRate = 'N/A';
    }

    const requiredRevPerUser = activatedUsers > 0 ? Math.round(totalCost / activatedUsers) : 0;

    // UI Updates
    valRoiTargetPct.textContent = `${targetPct}% (${targetedUsers.toLocaleString()} users)`;
    valRoiConvRate.textContent = `${convRate}%`;
    valRoiIncentive.textContent = `$${incentive}`;
    valRoiRevPerUser.textContent = `$${revPerUser}`;

    if (resActivated) resActivated.textContent = `${targetedUsers.toLocaleString()} / ${activatedUsers.toLocaleString()} users`;
    if (resCost) resCost.textContent = formatCurrency(totalCost);
    if (resGross) resGross.textContent = formatCurrency(grossRevenue);
    if (resROI) resROI.textContent = `${roiPercentage}%`;
    if (resNetProfit) resNetProfit.textContent = formatCurrency(netProfit);

    if (beConvRate) beConvRate.textContent = `${requiredConvRate}%`;
    if (beRevPerUser) beRevPerUser.textContent = `$${requiredRevPerUser}`;

    if (roiResultCard && roiStatusBadge) {
      if (netProfit >= 0) {
        roiResultCard.className = 'roi-impact-box result-positive';
        roiStatusBadge.textContent = 'Campaign breaks even & yields profit.';
        if (resNetProfit) resNetProfit.className = 'res-big-value val-green';
      } else {
        roiResultCard.className = 'roi-impact-box result-negative';
        roiStatusBadge.textContent = "The default scenario doesn't break even.";
        if (resNetProfit) resNetProfit.className = 'res-big-value val-red';
      }
    }
  }

  [roiTargetPct, roiConvRate, roiIncentive, roiRevPerUser].forEach(slider => {
    if (slider) slider.addEventListener('input', calculateCampaignROI);
  });
  calculateCampaignROI();

  /* --------------------------------------------------------------------------
     3. Cardholders Hover Facts & Quotes Feature
     -------------------------------------------------------------------------- */
  const cardholderTrigger = document.getElementById('cardholderFactTrigger');
  const factPopoverContent = document.getElementById('factPopoverContent');

  const cardholderFacts = [
    '💡 "Over 60% of credit card accounts worldwide carry a balance or remain inactive for extended periods."',
    '📊 "Credit card issuers lose up to 15% of potential annual interest revenue due to dormant accounts."',
    '💬 "‘The customer who rarely transacts isn’t lost — they just haven’t been given a compelling reason to pull out the card.’" — Financial Product Insights',
    '💡 "The average cardholder carries 3.8 credit cards in their wallet, but uses only 1 card for 80%+ of monthly expenses."',
    '💬 "‘Cash advances are the highest-margin, highest-risk feature on a credit card — segmenting them cleanly is key to portfolio health.’"',
    '📊 "In customer segmentation datasets, 68% of users fall into low-activity cohorts that offer untapped reactivation potential."',
    '💡 "A 5% increase in cardholder retention can boost overall credit portfolio profitability by 25% to 95%."',
    '💬 "‘Data without segmentation is just noise; customer intelligence turns transactions into actionable business decisions.’"'
  ];

  let lastFactIndex = -1;

  if (cardholderTrigger && factPopoverContent) {
    cardholderTrigger.addEventListener('mouseenter', () => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * cardholderFacts.length);
      } while (randomIndex === lastFactIndex && cardholderFacts.length > 1);
      
      lastFactIndex = randomIndex;
      factPopoverContent.textContent = cardholderFacts[randomIndex];
    });
  }

});
