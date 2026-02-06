import { useState, useEffect } from 'react';

// Import all page components
import HomePage from './components/HomePage';
import LearnPage from './components/LearnPage';
import ResourcesPage from './components/ResourcesPage';
import BlogPage from './components/BlogPage';
import LiquidityArticlePage from './components/LiquidityArticlePage';
import TradePolicyArticlePage from './components/TradePolicyArticlePage';
import EmergingMarketsArticlePage from './components/EmergingMarketsArticlePage';
import CreditSpreadsArticlePage from './components/CreditSpreadsArticlePage';
import ShareBuybacksArticlePage from './components/ShareBuybacksArticlePage';
import ValuationDispersionArticlePage from './components/ValuationDispersionArticlePage';
import BudgetingBasicsPage from './components/BudgetingBasicsPage';
import BudgetingLesson1Page from './components/BudgetingLesson1Page';
import BudgetingLesson2Page from './components/BudgetingLesson2Page';
import BudgetingLesson3Page from './components/BudgetingLesson3Page';
import BudgetingLesson4Page from './components/BudgetingLesson4Page';
import BudgetingLesson5Page from './components/BudgetingLesson5Page';
import BudgetingLesson6Page from './components/BudgetingLesson6Page';
import BudgetingLesson7Page from './components/BudgetingLesson7Page';
import BudgetingLesson8Page from './components/BudgetingLesson8Page';
import BudgetingLesson9Page from './components/BudgetingLesson9Page';
import BudgetingLesson10Page from './components/BudgetingLesson10Page';
import BudgetingLesson11Page from './components/BudgetingLesson11Page';
import BudgetingLesson12Page from './components/BudgetingLesson12Page';
import SavingStrategiesPage from './components/SavingStrategiesPage';
import SavingLesson1Page from './components/SavingLesson1Page';
import SavingLesson2Page from './components/SavingLesson2Page';
import SavingLesson3Page from './components/SavingLesson3Page';
import SavingLesson4Page from './components/SavingLesson4Page';
import SavingLesson5Page from './components/SavingLesson5Page';
import SavingLesson6Page from './components/SavingLesson6Page';
import SavingLesson7Page from './components/SavingLesson7Page';
import SavingLesson8Page from './components/SavingLesson8Page';
import SavingLesson9Page from './components/SavingLesson9Page';
import SavingLesson10Page from './components/SavingLesson10Page';
import SavingLesson11Page from './components/SavingLesson11Page';
import CreditDebtPage from './components/CreditDebtPage';
import CreditDebtLesson1Page from './components/CreditDebtLesson1Page';
import CreditDebtLesson2Page from './components/CreditDebtLesson2Page';
import CreditDebtLesson3Page from './components/CreditDebtLesson3Page';
import CreditDebtLesson4Page from './components/CreditDebtLesson4Page';
import CreditDebtLesson5Page from './components/CreditDebtLesson5Page';
import CreditDebtLesson6Page from './components/CreditDebtLesson6Page';
import CreditDebtLesson7Page from './components/CreditDebtLesson7Page';
import CreditDebtLesson8Page from './components/CreditDebtLesson8Page';
import CreditDebtLesson9Page from './components/CreditDebtLesson9Page';
import CreditDebtLesson10Page from './components/CreditDebtLesson10Page';
import CreditDebtLesson11Page from './components/CreditDebtLesson11Page';
import CreditDebtLesson12Page from './components/CreditDebtLesson12Page';
import CreditDebtLesson13Page from './components/CreditDebtLesson13Page';
import CreditDebtLesson14Page from './components/CreditDebtLesson14Page';
import CreditDebtLesson15Page from './components/CreditDebtLesson15Page';
import Investing101Page from './components/Investing101Page';
import InvestingLesson1Page from './components/InvestingLesson1Page';
import InvestingLesson2Page from './components/InvestingLesson2Page';
import InvestingLesson3Page from './components/InvestingLesson3Page';
import InvestingLesson4Page from './components/InvestingLesson4Page';
import InvestingLesson5Page from './components/InvestingLesson5Page';
import InvestingLesson6Page from './components/InvestingLesson6Page';
import InvestingLesson7Page from './components/InvestingLesson7Page';
import InvestingLesson8Page from './components/InvestingLesson8Page';
import InvestingLesson9Page from './components/InvestingLesson9Page';
import InvestingLesson10Page from './components/InvestingLesson10Page';
import TaxEssentialsPage from './components/TaxEssentialsPage';
import TaxEssentialsLesson1Page from './components/TaxEssentialsLesson1Page';
import TaxEssentialsLesson2Page from './components/TaxEssentialsLesson2Page';
import TaxEssentialsLesson3Page from './components/TaxEssentialsLesson3Page';
import TaxEssentialsLesson4Page from './components/TaxEssentialsLesson4Page';
import TaxEssentialsLesson5Page from './components/TaxEssentialsLesson5Page';
import TaxEssentialsLesson6Page from './components/TaxEssentialsLesson6Page';
import TaxEssentialsLesson7Page from './components/TaxEssentialsLesson7Page';
import TaxEssentialsLesson8Page from './components/TaxEssentialsLesson8Page';
import TaxEssentialsLesson9Page from './components/TaxEssentialsLesson9Page';
import TaxEssentialsLesson10Page from './components/TaxEssentialsLesson10Page';
import TaxEssentialsLesson11Page from './components/TaxEssentialsLesson11Page';
import TaxEssentialsLesson12Page from './components/TaxEssentialsLesson12Page';
import FinancialPlanningPage from './components/FinancialPlanningPage';
import FinancialPlanningLesson1Page from './components/FinancialPlanningLesson1Page';
import FinancialPlanningLesson2Page from './components/FinancialPlanningLesson2Page';
import FinancialPlanningLesson3Page from './components/FinancialPlanningLesson3Page';
import FinancialPlanningLesson4Page from './components/FinancialPlanningLesson4Page';
import FinancialPlanningLesson5Page from './components/FinancialPlanningLesson5Page';
import FinancialPlanningLesson6Page from './components/FinancialPlanningLesson6Page';
import FinancialPlanningLesson7Page from './components/FinancialPlanningLesson7Page';
import FinancialPlanningLesson8Page from './components/FinancialPlanningLesson8Page';
import FinancialPlanningLesson9Page from './components/FinancialPlanningLesson9Page';
import FinancialPlanningLesson10Page from './components/FinancialPlanningLesson10Page';
import FinancialPlanningLesson11Page from './components/FinancialPlanningLesson11Page';
import FinancialPlanningLesson12Page from './components/FinancialPlanningLesson12Page';
import BudgetCalculatorPage from './components/BudgetCalculatorPage';
import SavingsChallengePage from './components/SavingsChallengePage';
import SavingsStrategySelectorPage from './components/SavingsStrategySelectorPage';
import InvestmentTypeExplorerPage from './components/InvestmentTypeExplorerPage';
import CompoundGrowthVisualPage from './components/CompoundGrowthVisualPage';
import CreditScoreSimulatorPage from './components/CreditScoreSimulatorPage';
import DebtDecisionLabPage from './components/DebtDecisionLabPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import PaycheckTaxEstimatorPage from './components/PaycheckTaxEstimatorPage';
import W4HelperPage from './components/W4HelperPage';
import GetInvolvedPage from './components/GetInvolvedPage';
import ContactPage from './components/ContactPage';
import FinancialPlanBuilderPage from './components/FinancialPlanBuilderPage';
import CustomerStoriesPage from './components/CustomerStoriesPage';

type ComponentType = () => JSX.Element;

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Route mapping - store component functions, not JSX
  const routes: Record<string, ComponentType> = {
    '/': HomePage,
    '/learn': LearnPage,
    '/resources': ResourcesPage,
    '/blog': BlogPage,
    '/blog/liquidity-article': LiquidityArticlePage,
    '/blog/trade-policy-article': TradePolicyArticlePage,
    '/blog/emerging-markets-article': EmergingMarketsArticlePage,
    '/blog/credit-spreads-article': CreditSpreadsArticlePage,
    '/blog/share-buybacks-article': ShareBuybacksArticlePage,
    '/blog/valuation-dispersion-article': ValuationDispersionArticlePage,
    '/budgeting-basics': BudgetingBasicsPage,
    '/budgeting-basics/lesson-1': BudgetingLesson1Page,
    '/budgeting-basics/lesson-2': BudgetingLesson2Page,
    '/budgeting-basics/lesson-3': BudgetingLesson3Page,
    '/budgeting-basics/lesson-4': BudgetingLesson4Page,
    '/budgeting-basics/lesson-5': BudgetingLesson5Page,
    '/budgeting-basics/lesson-6': BudgetingLesson6Page,
    '/budgeting-basics/lesson-7': BudgetingLesson7Page,
    '/budgeting-basics/lesson-8': BudgetingLesson8Page,
    '/budgeting-basics/lesson-9': BudgetingLesson9Page,
    '/budgeting-basics/lesson-10': BudgetingLesson10Page,
    '/budgeting-basics/lesson-11': BudgetingLesson11Page,
    '/budgeting-basics/lesson-12': BudgetingLesson12Page,
    '/saving-strategies': SavingStrategiesPage,
    '/saving-strategies/lesson-1': SavingLesson1Page,
    '/saving-strategies/lesson-2': SavingLesson2Page,
    '/saving-strategies/lesson-3': SavingLesson3Page,
    '/saving-strategies/lesson-4': SavingLesson4Page,
    '/saving-strategies/lesson-5': SavingLesson5Page,
    '/saving-strategies/lesson-6': SavingLesson6Page,
    '/saving-strategies/lesson-7': SavingLesson7Page,
    '/saving-strategies/lesson-8': SavingLesson8Page,
    '/saving-strategies/lesson-9': SavingLesson9Page,
    '/saving-strategies/lesson-10': SavingLesson10Page,
    '/saving-strategies/lesson-11': SavingLesson11Page,
    '/credit-debt': CreditDebtPage,
    '/credit-debt/lesson-1': CreditDebtLesson1Page,
    '/credit-debt/lesson-2': CreditDebtLesson2Page,
    '/credit-debt/lesson-3': CreditDebtLesson3Page,
    '/credit-debt/lesson-4': CreditDebtLesson4Page,
    '/credit-debt/lesson-5': CreditDebtLesson5Page,
    '/credit-debt/lesson-6': CreditDebtLesson6Page,
    '/credit-debt/lesson-7': CreditDebtLesson7Page,
    '/credit-debt/lesson-8': CreditDebtLesson8Page,
    '/credit-debt/lesson-9': CreditDebtLesson9Page,
    '/credit-debt/lesson-10': CreditDebtLesson10Page,
    '/credit-debt/lesson-11': CreditDebtLesson11Page,
    '/credit-debt/lesson-12': CreditDebtLesson12Page,
    '/credit-debt/lesson-13': CreditDebtLesson13Page,
    '/credit-debt/lesson-14': CreditDebtLesson14Page,
    '/credit-debt/lesson-15': CreditDebtLesson15Page,
    '/investing-101': Investing101Page,
    '/investing-101/lesson-1': InvestingLesson1Page,
    '/investing-101/lesson-2': InvestingLesson2Page,
    '/investing-101/lesson-3': InvestingLesson3Page,
    '/investing-101/lesson-4': InvestingLesson4Page,
    '/investing-101/lesson-5': InvestingLesson5Page,
    '/investing-101/lesson-6': InvestingLesson6Page,
    '/investing-101/lesson-7': InvestingLesson7Page,
    '/investing-101/lesson-8': InvestingLesson8Page,
    '/investing-101/lesson-9': InvestingLesson9Page,
    '/investing-101/lesson-10': InvestingLesson10Page,
    '/tax-essentials': TaxEssentialsPage,
    '/tax-essentials/lesson-1': TaxEssentialsLesson1Page,
    '/tax-essentials/lesson-2': TaxEssentialsLesson2Page,
    '/tax-essentials/lesson-3': TaxEssentialsLesson3Page,
    '/tax-essentials/lesson-4': TaxEssentialsLesson4Page,
    '/tax-essentials/lesson-5': TaxEssentialsLesson5Page,
    '/tax-essentials/lesson-6': TaxEssentialsLesson6Page,
    '/tax-essentials/lesson-7': TaxEssentialsLesson7Page,
    '/tax-essentials/lesson-8': TaxEssentialsLesson8Page,
    '/tax-essentials/lesson-9': TaxEssentialsLesson9Page,
    '/tax-essentials/lesson-10': TaxEssentialsLesson10Page,
    '/tax-essentials/lesson-11': TaxEssentialsLesson11Page,
    '/tax-essentials/lesson-12': TaxEssentialsLesson12Page,
    '/learn/tax-essentials': TaxEssentialsPage,
    '/learn/tax-essentials/lesson-1': TaxEssentialsLesson1Page,
    '/learn/tax-essentials/lesson-2': TaxEssentialsLesson2Page,
    '/learn/tax-essentials/lesson-3': TaxEssentialsLesson3Page,
    '/learn/tax-essentials/lesson-4': TaxEssentialsLesson4Page,
    '/learn/tax-essentials/lesson-5': TaxEssentialsLesson5Page,
    '/learn/tax-essentials/lesson-6': TaxEssentialsLesson6Page,
    '/learn/tax-essentials/lesson-7': TaxEssentialsLesson7Page,
    '/learn/tax-essentials/lesson-8': TaxEssentialsLesson8Page,
    '/learn/tax-essentials/lesson-9': TaxEssentialsLesson9Page,
    '/learn/tax-essentials/lesson-10': TaxEssentialsLesson10Page,
    '/learn/tax-essentials/lesson-11': TaxEssentialsLesson11Page,
    '/learn/tax-essentials/lesson-12': TaxEssentialsLesson12Page,
    '/financial-planning': FinancialPlanningPage,
    '/financial-planning/lesson-1': FinancialPlanningLesson1Page,
    '/financial-planning/lesson-2': FinancialPlanningLesson2Page,
    '/financial-planning/lesson-3': FinancialPlanningLesson3Page,
    '/financial-planning/lesson-4': FinancialPlanningLesson4Page,
    '/financial-planning/lesson-5': FinancialPlanningLesson5Page,
    '/financial-planning/lesson-6': FinancialPlanningLesson6Page,
    '/financial-planning/lesson-7': FinancialPlanningLesson7Page,
    '/financial-planning/lesson-8': FinancialPlanningLesson8Page,
    '/financial-planning/lesson-9': FinancialPlanningLesson9Page,
    '/financial-planning/lesson-10': FinancialPlanningLesson10Page,
    '/financial-planning/lesson-11': FinancialPlanningLesson11Page,
    '/financial-planning/lesson-12': FinancialPlanningLesson12Page,
    '/budget-calculator': BudgetCalculatorPage,
    '/savings-challenge': SavingsChallengePage,
    '/savings-strategy-selector': SavingsStrategySelectorPage,
    '/investment-type-explorer': InvestmentTypeExplorerPage,
    '/compound-growth-visual': CompoundGrowthVisualPage,
    '/credit-score-simulator': CreditScoreSimulatorPage,
    '/debt-decision-lab': DebtDecisionLabPage,
    '/privacy-policy': PrivacyPolicyPage,
    '/legal': PrivacyPolicyPage,
    '/paycheck-tax-estimator': PaycheckTaxEstimatorPage,
    '/w4-helper': W4HelperPage,
    '/get-involved': GetInvolvedPage,
    '/contact': ContactPage,
    '/financial-plan-builder': FinancialPlanBuilderPage,
    '/customer-stories': CustomerStoriesPage,
  };

  // Get the component for the current path, or use HomePage as fallback
  const Component = routes[currentPath] || HomePage;

  return <Component />;
}