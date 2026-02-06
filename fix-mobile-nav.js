const fs = require('fs');
const path = require('path');

// Files to update (all the remaining ones)
const filesToUpdate = [
  '/src/app/components/BudgetCalculatorPage.tsx',
  '/src/app/components/BudgetingBasicsPage.tsx',
  '/src/app/components/BudgetingLesson10Page.tsx',
  '/src/app/components/BudgetingLesson11Page.tsx',
  '/src/app/components/BudgetingLesson12Page.tsx',
  '/src/app/components/BudgetingLesson1Page.tsx',
  '/src/app/components/BudgetingLesson2Page.tsx',
  '/src/app/components/BudgetingLesson3Page.tsx',
  '/src/app/components/BudgetingLesson4Page.tsx',
  '/src/app/components/BudgetingLesson5Page.tsx',
  '/src/app/components/BudgetingLesson6Page.tsx',
  '/src/app/components/BudgetingLesson7Page.tsx',
  '/src/app/components/BudgetingLesson8Page.tsx',
  '/src/app/components/BudgetingLesson9Page.tsx',
  '/src/app/components/CompoundGrowthVisualPage.tsx',
  '/src/app/components/ContactPage.tsx',
  '/src/app/components/CreditDebtLesson10Page.tsx',
  '/src/app/components/CreditDebtLesson11Page.tsx',
  '/src/app/components/CreditDebtLesson12Page.tsx',
  '/src/app/components/CreditDebtLesson13Page.tsx',
  '/src/app/components/CreditDebtLesson14Page.tsx',
  '/src/app/components/CreditDebtLesson15Page.tsx',
  '/src/app/components/CreditDebtLesson1Page.tsx',
  '/src/app/components/CreditDebtLesson2Page.tsx',
  '/src/app/components/CreditDebtLesson3Page.tsx',
  '/src/app/components/CreditDebtLesson4Page.tsx',
  '/src/app/components/CreditDebtLesson5Page.tsx',
  '/src/app/components/CreditDebtLesson6Page.tsx',
  '/src/app/components/CreditDebtLesson7Page.tsx',
  '/src/app/components/CreditDebtLesson8Page.tsx',
  '/src/app/components/CreditDebtLesson9Page.tsx',
  '/src/app/components/CreditDebtPage.tsx',
  '/src/app/components/CreditScoreSimulatorPage.tsx',
  '/src/app/components/CustomerStoriesPage.tsx',
  '/src/app/components/DebtDecisionLabPage.tsx',
  '/src/app/components/FinancialPlanBuilderPage.tsx',
  '/src/app/components/FinancialPlanningLesson10Page.tsx',
  '/src/app/components/FinancialPlanningLesson11Page.tsx',
  '/src/app/components/FinancialPlanningLesson12Page.tsx',
  '/src/app/components/FinancialPlanningLesson1Page.tsx',
  '/src/app/components/FinancialPlanningLesson2Page.tsx',
  '/src/app/components/FinancialPlanningLesson3Page.tsx',
  '/src/app/components/FinancialPlanningLesson4Page.tsx',
  '/src/app/components/FinancialPlanningLesson5Page.tsx',
  '/src/app/components/FinancialPlanningLesson6Page.tsx',
  '/src/app/components/FinancialPlanningLesson7Page.tsx',
  '/src/app/components/FinancialPlanningLesson8Page.tsx',
  '/src/app/components/FinancialPlanningLesson9Page.tsx',
  '/src/app/components/FinancialPlanningPage.tsx',
  '/src/app/components/GetInvolvedPage.tsx',
  '/src/app/components/Investing101Page.tsx',
  '/src/app/components/InvestingLesson10Page.tsx',
  '/src/app/components/InvestingLesson1Page.tsx',
  '/src/app/components/InvestingLesson2Page.tsx',
  '/src/app/components/InvestingLesson3Page.tsx',
  '/src/app/components/InvestingLesson4Page.tsx',
  '/src/app/components/InvestingLesson5Page.tsx',
  '/src/app/components/InvestingLesson6Page.tsx',
  '/src/app/components/InvestingLesson7Page.tsx',
  '/src/app/components/InvestingLesson8Page.tsx',
  '/src/app/components/InvestingLesson9Page.tsx',
  '/src/app/components/InvestmentTypeExplorerPage.tsx',
  '/src/app/components/LiquidityArticlePage.tsx',
  '/src/app/components/PaycheckTaxEstimatorPage.tsx',
  '/src/app/components/PrivacyPolicyPage.tsx',
  '/src/app/components/SavingLesson10Page.tsx',
  '/src/app/components/SavingLesson11Page.tsx',
  '/src/app/components/SavingLesson1Page.tsx',
  '/src/app/components/SavingLesson2Page.tsx',
  '/src/app/components/SavingLesson3Page.tsx',
  '/src/app/components/SavingLesson4Page.tsx',
  '/src/app/components/SavingLesson5Page.tsx',
  '/src/app/components/SavingLesson6Page.tsx',
  '/src/app/components/SavingLesson7Page.tsx',
  '/src/app/components/SavingLesson8Page.tsx',
  '/src/app/components/SavingLesson9Page.tsx',
  '/src/app/components/SavingStrategiesPage.tsx',
  '/src/app/components/SavingsChallengePage.tsx',
  '/src/app/components/SavingsStrategySelectorPage.tsx',
  '/src/app/components/TaxEssentialsLesson10Page.tsx',
  '/src/app/components/TaxEssentialsLesson11Page.tsx',
  '/src/app/components/TaxEssentialsLesson12Page.tsx',
  '/src/app/components/TaxEssentialsLesson1Page.tsx',
  '/src/app/components/TaxEssentialsLesson2Page.tsx',
  '/src/app/components/TaxEssentialsLesson3Page.tsx',
  '/src/app/components/TaxEssentialsLesson4Page.tsx',
  '/src/app/components/TaxEssentialsLesson5Page.tsx',
  '/src/app/components/TaxEssentialsLesson6Page.tsx',
  '/src/app/components/TaxEssentialsLesson7Page.tsx',
  '/src/app/components/TaxEssentialsLesson8Page.tsx',
  '/src/app/components/TaxEssentialsLesson9Page.tsx',
  '/src/app/components/TaxEssentialsPage.tsx',
  '/src/app/components/TradePolicyArticlePage.tsx',
  '/src/app/components/W4HelperPage.tsx',
  '/src/app/components/lessons/budgeting/BudgetingLesson8Page.tsx',
];

let successCount = 0;
let errorCount = 0;

filesToUpdate.forEach(filePath => {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`Skipping ${filePath} - file does not exist`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace logo class
    content = content.replace(
      /className="h-8 -ml-7"/g,
      'className="h-6 md:h-8 md:-ml-7"'
    );
    
    // Replace nav gap
    content = content.replace(
      /<nav className="flex gap-8">/g,
      '<nav className="flex gap-4 md:gap-8">'
    );
    
    // Replace nav link text sizes
    content = content.replace(
      /className="text-lg text-\[#1C1C1C\] hover:opacity-70 transition-opacity"/g,
      'className="text-base md:text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity"'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    successCount++;
    console.log(`✓ Updated ${filePath}`);
  } catch (error) {
    errorCount++;
    console.error(`✗ Error updating ${filePath}:`, error.message);
  }
});

console.log(`\nComplete! ${successCount} files updated, ${errorCount} errors.`);
