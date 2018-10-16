package tech.genesis.portal.fourm.specification;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.domain.Specifications;
import tech.genesis.portal.fourm.domain.Topic;
import tech.genesis.portal.util.SearchOperation;
import tech.genesis.portal.util.SpecSearchCriteria;

import java.util.ArrayList;
import java.util.List;

public class TopicSpecificationsBuilder {
    private final List<SpecSearchCriteria> params;

    public TopicSpecificationsBuilder() {
        params = new ArrayList<>();
    }

    // API

    public final TopicSpecificationsBuilder with(final String key, final String operation, final Object value, final String prefix, final String suffix) {
        return with(null, key, operation, value, prefix, suffix);
    }

    public final TopicSpecificationsBuilder with(final String orPredicate, final String key, final String operation, final Object value, final String prefix, final String suffix) {
        SearchOperation op = SearchOperation.getSimpleOperation(operation.charAt(0));
        if (op != null) {
            if (op == SearchOperation.EQUALITY) { // the operation may be complex operation
                final boolean startWithAsterisk = prefix != null && prefix.contains(SearchOperation.ZERO_OR_MORE_REGEX);
                final boolean endWithAsterisk = suffix != null && suffix.contains(SearchOperation.ZERO_OR_MORE_REGEX);

                if (startWithAsterisk && endWithAsterisk) {
                    op = SearchOperation.CONTAINS;
                } else if (startWithAsterisk) {
                    op = SearchOperation.ENDS_WITH;
                } else if (endWithAsterisk) {
                    op = SearchOperation.STARTS_WITH;
                }
            }
            params.add(new SpecSearchCriteria(orPredicate, key, op, value));
        }
        return this;
    }

    public Specification<Topic> build() {

        if (params.size() == 0)
            return null;

        Specification<Topic> result = new TopicSpecification(params.get(0));

        for (int i = 1; i < params.size(); i++) {
            result = params.get(i)
                    .isOrPredicate()
                    ? Specifications.where(result)
                    .or(new TopicSpecification(params.get(i)))
                    : Specifications.where(result)
                    .and(new TopicSpecification(params.get(i)));

        }

        return result;
    }

    public final TopicSpecificationsBuilder with(TopicSpecification spec) {
        params.add(spec.getCriteria());
        return this;
    }

    public final TopicSpecificationsBuilder with(SpecSearchCriteria criteria) {
        params.add(criteria);
        return this;
    }
}
