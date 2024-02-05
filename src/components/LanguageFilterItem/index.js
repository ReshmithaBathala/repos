import './index.css'

const LanguageFilterItem = props => {
  const {languageData, setActiveLanguageFilterId, isActive} = props
  const {language, id} = languageData
  const activeClassName = isActive
    ? 'active-language-button'
    : 'language-button'
  const onClickLanguageButton = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li className="language-list-item-container">
      <button
        type="button"
        className={activeClassName}
        onClick={onClickLanguageButton}
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
